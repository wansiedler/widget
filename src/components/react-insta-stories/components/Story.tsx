// @ts-ignore
import React, {useContext} from "react";
import {StoryProps, GlobalCtx} from "../interfaces";
import GlobalContext from "../context/Global";
import {error} from "../../util";

const Story = (props: StoryProps) => {
    const globalContext = useContext<GlobalCtx>(
        GlobalContext
    );

    const {width, height, loader, header, storyStyles} = globalContext;

    const rendererMessageHandler = (type: string, data: any) => {
        switch (type) {
            case 'UPDATE_VIDEO_DURATION':
                props.getVideoDuration(data.duration);
                return {ack: 'OK' as 'OK'}
        }
    }

    const getStoryContent = () => {
        try {
            let InnerContent = props.story.content;
            let config = {width, height, loader, header, storyStyles};

            if (props.story.type && props.story.type === 'quiz') {
                return <InnerContent
                    config={config}
                    messageHandler={rendererMessageHandler}
                    action={props.action}
                    isPaused={props.playState}
                    story={props.story}
                    onAnswer={props.onAnswer}
                />
            }


            return <InnerContent
                config={config}
                action={props.action}
                isPaused={props.playState}
                story={props.story}
                messageHandler={rendererMessageHandler}
            />
        } catch (err) {
            error(err)
            error(props)
        }
    };

    return (
        <div
            style={{...styles.story, width: width, height: height}}
        >
            {getStoryContent()}
        </div>
    );
};

const styles = {
    story: {
        display: "flex",
        position: "relative",
        overflow: "hidden",
        alignItems: "center"
    } as React.CSSProperties,
    storyContent: {
        width: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto"
    } as React.CSSProperties
};

export default Story;
