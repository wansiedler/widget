import {useEffect} from 'react';
// import { useEffect } from 'preact/hooks'
import {Renderer, Tester} from '../interfaces';
import {log} from "../../util";

export const renderer: Renderer = (props) => {
    // log(props)
    useEffect(() => {
        props.action('play');
    }, [props.story])
    // log('quiz')
    const Content = props.story.originalContent;
    // log(Content)
    return <Content {...props} />
}

export const tester: Tester = (story) => {
    return {
        condition: story.type === 'quiz',
        priority: 2
    }
}

export default {
    renderer,
    tester
}

