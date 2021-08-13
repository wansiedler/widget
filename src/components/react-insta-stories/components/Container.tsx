// @ts-ignore
import React, {useContext, useState, useRef, useEffect} from 'react'
// import React, {useContext, useState, useRef, useEffect} from 'preact'
import GlobalContext from '../context/Global'
import StoriesContext from '../context/Stories'
import ProgressContext from '../context/Progress'
import Story from './Story'
import ProgressArray from './ProgressArray'
import {GlobalCtx, StoriesContext as StoriesContextInterface} from '../interfaces'
import {useDispatch, useSelector} from "react-redux";
import {QuizState, RootState} from "../../store/store";
import {error, log} from "../../util";
import {noContinuation, nextStory, prevStory} from "../../store/actions/quizzes";
import Quiz from "../renderers/Quiz";
import {PREVIOUS_INDEX} from "../../store/actions/action-types";


export default function () {
    const [currentId, setCurrentId] = useState<number>(0)
    const [pause, setPause] = useState<boolean>(true)
    const [bufferAction, setBufferAction] = useState<boolean>(true)
    const [videoDuration, setVideoDuration] = useState<number>(0)

    let mousedownId = useRef<any>();
    let isMounted = useRef<boolean>(true);

    const {
        width,
        height,
        loop,
        // currentIndex,
        isPaused,
        keyboardNavigation,
        storyContainerStyles = {}
    } = useContext<GlobalCtx>(GlobalContext);
    const {stories} = useContext<StoriesContextInterface>(StoriesContext);

    const {
        currentIndex,
        finished,
        interactive
    }: QuizState = useSelector((state: RootState) => state.quiz);
    // const stories = useSelector(state => state.quiz.stories);
    const dispatch = useDispatch();





    useEffect(() => {
        if (typeof currentIndex === 'number') {
            if (currentIndex >= 0 && currentIndex < stories.length) {
                setCurrentIdWrapper(() => currentIndex)
            } else {
                // console.log(stories)
                // console.log(stories.length)
                log(stories)
                error('Index out of bounds. Current index was set to value more than the length of stories array.' + currentIndex)
            }
        }
    }, [currentIndex])

    useEffect(() => {
        if (typeof isPaused === 'boolean') {
            console.log(isPaused)
            setPause(isPaused)
        }
    }, [isPaused])

    useEffect(() => {
        const isClient = (typeof window !== 'undefined' && window.document);
        if (isClient && (typeof keyboardNavigation === 'boolean' && keyboardNavigation)) {
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            }
        }
    }, [keyboardNavigation]);

    // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            previous()
        } else if (e.key === 'ArrowRight') {
            next()
        } else if (e.code === 'Space' || e.code === ' ') {
            // console.log(pause)
            toggleStateOnClick()
        }
    }

    const toggleState = (action: string, bufferAction?: boolean) => {
        // console.log(action)
        setPause(action === 'pause')
        setBufferAction(!!bufferAction)
    }
    const toggleStateOnClick = () => {
        console.log(pause)
        setPause(!!pause)
        // setPause(pause)
    }

    const setCurrentIdWrapper = (callback) => {
        setCurrentId(callback);
        toggleState('pause', true);
    }

    const previous = () => {
        dispatch(prevStory());
        // prevStory()
        // setCurrentIdWrapper(prev => prev > 0 ? prev - 1 : prev)
    }

    const next = () => {
        dispatch(nextStory());
        // if (isMounted.current) {
        //     if (loop) {
        //         updateNextStoryIdForLoop()
        //         dispatch(nextStory());
        //     } else {
        //         updateNextStoryId()
        //         dispatch(nextStory());
        //     }
        // }
    };

    const updateNextStoryIdForLoop = () => {
        setCurrentIdWrapper(prev => (prev + 1) % stories.length)
    }

    const updateNextStoryId = () => {
        setCurrentIdWrapper(prev => {
            if (prev < stories.length - 1) return prev + 1
            return prev
        })
    }

    const debouncePause = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault()
        mousedownId.current = setTimeout(() => {
            toggleState('pause')
        }, 200)
    }

    const mouseUp = (type: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault()
        mousedownId.current && clearTimeout(mousedownId.current)

        if (pause) {
            toggleState('play')
        } else {
            type === 'next' ? next() : previous()
        }
    }

    const getVideoDuration = (duration: number) => {
        setVideoDuration(duration * 1000)
    }

    let styleArrow = {
        position: "absolute",
        top: '50%',
        borderRadius: '50%',
        border: '1px solid black',
        width: 26,
        height: 26,
        background: '#ddd',
        opacity: 0.2
    }
    let navButton = {
        position: "absolute",
        // top: '50%',
        // borderRadius: '50%',
        // width: 26,
        // height: 26,
        // background: '#ddd',
        // opacity:0.2,

        border: 0,
        padding: 0,
        textAlign: 'center',
        boxShadow: '0 0 20px 0 rgb(0 0 0 / 30%)',
        cursor: 'pointer',
        transition: 'background 0.2s',
        zIndex: 100,
        // -webkit-tap-highlight-color: rgba(0,0,0,0);
    }


    // log(currentIndex)
    return (
        <div style={{...storyContainerStyles, ...styles.container, ...{width, height}}}>
            <ProgressContext.Provider value={
                {
                    bufferAction: bufferAction,
                    videoDuration: videoDuration,
                    currentId,
                    pause,
                    next
                }
            }>
                <ProgressArray/>
            </ProgressContext.Provider>
            <Story
                action={toggleState}
                bufferAction={bufferAction}
                playState={pause}
                story={stories[currentId]}
                // onAnswer={stories[currentId].onAnswer}
                getVideoDuration={getVideoDuration}
            />
            {/*<div style={styles.overlay}>*/}
            {/*    <div style={{ width: '50%', zIndex: 999 }} onTouchStart={debouncePause} onTouchEnd={mouseUp('previous')} onMouseDown={debouncePause} onMouseUp={mouseUp('previous')} />*/}
            {/*    <div style={{ width: '50%', zIndex: 999 }} onTouchStart={debouncePause} onTouchEnd={mouseUp('next')} onMouseDown={debouncePause} onMouseUp={mouseUp('next')} />*/}
            {/*</div>*/}
            {!finished && (
                <div id='controls'>
                    {currentIndex > 0 && (
                        <button className="navButton icon__left"
                                style={{
                                    left: 0,
                                    borderRadius: '0px 40px 40px 0px'
                                }}
                            // onTouchStart={debouncePause}
                            // onMouseDown={debouncePause}
                                onTouchEnd={mouseUp('previous')}
                                onMouseUp={mouseUp('previous')}
                        />)}

                    {currentIndex < stories.length - 1 && (
                        <button className={`navButton icon__right ${interactive ? "interactive" : ""}`}
                                style={{
                                    right: 0,
                                    borderRadius: '40px 0px 0px 40px'
                                }}
                            // onTouchStart={debouncePause}
                            // onMouseDown={debouncePause}
                                onTouchEnd={mouseUp('next')}
                                onMouseUp={mouseUp('next')}
                        />)}

                </div>

            )}

        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        // background: '#F0F0F2',
        // color: '#484848',
        flexDirection: 'column',
        // background: '#111',

        position: 'relative'
    } as React.CSSProperties,
    overlay: {
        position: 'absolute',
        height: 'inherit',
        width: 'inherit',
        display: 'flex'
    } as React.CSSProperties
}