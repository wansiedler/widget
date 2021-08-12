// @ts-ignore
import React, {useEffect, useState} from 'react'
import {ReactInstaStoriesProps, GlobalCtx, Story, Tester, Renderer} from './interfaces'
import Container from './components/Container'
import GlobalContext from './context/Global'
import StoriesContext from './context/Stories';
import {getRenderer} from './util/renderers'
import {renderers as defaultRenderers} from './renderers';
import withHeader from './renderers/wrappers/WithHeader'
import withSeeMore from "./renderers/wrappers/WithSeeMore"

import {log} from "../util";

const ReactInstaStories = function (props: ReactInstaStoriesProps) {
    let renderers = props.renderers ? props.renderers.concat(defaultRenderers) : defaultRenderers;
    let context: GlobalCtx = {
        width: props.width,
        height: props.height,
        loader: props.loader,
        header: props.header,
        storyContainerStyles: props.storyContainerStyles,
        storyStyles: props.storyStyles,
        loop: props.loop,
        defaultInterval: props.defaultInterval,
        isPaused: props.isPaused,
        currentIndex: props.currentIndex,
        onStoryStart: props.onStoryStart,
        onStoryEnd: props.onStoryEnd,
        onAllStoriesEnd: props.onAllStoriesEnd,
        keyboardNavigation: props.keyboardNavigation
    }
    const [stories, setStories] = useState<{ stories: Story[] }>({stories: generateStories(props.stories, renderers, props.onAnswer)});
    useEffect(() => {
        let stories = generateStories(props.stories, renderers, props.onAnswer)
        // console.log(stories)
        setStories({stories: stories});
    }, [props.stories, props.renderers]);

    return <GlobalContext.Provider value={context}>
        <StoriesContext.Provider value={stories}>
            <Container/>
        </StoriesContext.Provider>
    </GlobalContext.Provider>
}

const generateStories = (stories: Story[], renderers: { renderer: Renderer, tester: Tester }[], onAnswer) => {
    return stories.map(s => {
        let story: Story = {};

        // console.log(typeof s)

        // log(s)
        // if (s && s.hasOwnProperty('type') && s.type === 'quiz') {
        //     story = Object.assign(story, s);
        // } else
        if (typeof s === 'string') {
            story.url = s;
            story.type = 'image';
        } else if (typeof s === 'object') {
            story = Object.assign(story, s);
        }

        if (story.type === 'quiz') {
            story.onAnswer = onAnswer;
        }


        let renderer = getRenderer(story, renderers);
        // console.log(renderer)
        story.originalContent = story.content;
        story.content = renderer;


        return story
    })
};

ReactInstaStories.defaultProps = {
    width: 360,
    height: 640,
    defaultInterval: 4000
}

export const WithHeader = withHeader;
export const WithSeeMore = withSeeMore;

export default ReactInstaStories