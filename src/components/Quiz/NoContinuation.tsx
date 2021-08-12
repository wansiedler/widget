import React, {useContext, useEffect, useState} from "react";
import {getRandomInt, log} from "../util";
import {Logo} from "../Logo";
import {firstStory, nextStory, restart} from "../store/actions/quizzes";
import {useDispatch} from "react-redux";

export const NoContinuation = ({action, story, content}) => {
    // console.log(action)
    // action('pause')
    const [completed, setCompleted] = useState([0]);
    const [answered, setAnswered] = useState(0);
    const dispatch = useDispatch();
    return (
        <div className="quiz">
            <a
                style={{
                    color: "green",
                    position: "absolute",
                    top: 40,
                    right: 40,
                    zIndex: 100
                }}
                onClick={() => {
                    dispatch(restart())
                }}
            >
                ⨉
            </a>
            <div className="circleQuestion">
                <div style={{
                    width: 290
                }}>
                    <h2 style={{
                        // marginBottom: 10
                    }}>
                        {story.question}
                        {story.subtext && <p>{story.subtext}</p>}
                    </h2>
                    <button
                        className="label"
                        onClick={(event) => dispatch(restart())}
                    >
                        Trotzdem verlassen
                    </button>
                    <button
                        className="label"
                        onClick={(event) => dispatch(restart())}
                    >
                        Ok, weiter quizzen!
                    </button>
                    {content && content}
                </div>
            </div>
            <Logo/>
        </div>
    )
}