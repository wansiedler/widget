import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import {Logo} from "../Logo";
import {getRandomInt, Sleep} from "../util";
import {useDispatch, useSelector} from "react-redux";
import {interactive} from "../store/actions/quizzes";

export const Result = ({story, content, ...props}) => {
    const [completed, setCompleted] = useState([0]);
    const [answered, setAnswered] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(interactive())
        }, 1000)
    }, []);

    const {quiz} = useSelector((state) => state);

    return (
        <div className="quiz">
            <div>
                <div className="question">
                    <h3>{story.question}</h3>
                </div>
                {story.subtext && <p>{story.subtext}</p>}
                {props.subtext && <div
                    style={{
                        width: 290,
                        textAlign: 'center',
                        margin: '0 auto'
                    }}
                >{props.subtext}</div>}
                <p>Zufriedenheit aller Gruppen:</p>
                {
                    ['20-29',
                        '30-39',
                        '40-49',
                        '50-59',
                        '60-69'
                    ].map((item, key) => (
                        <div
                            key={key}
                        >
                            <span
                                className='tab'
                            >{item}</span>
                            {quiz.answeredQuestions.age && quiz.answeredQuestions.age == item ?
                                <ProgressBar
                                    color='#84BF03'
                                    completed={getRandomInt(100, 20)}
                                /> : <ProgressBar
                                    completed={getRandomInt(100, 20)}
                                />}
                        </div>

                    ))}
                {content && content}
            </div>
            <Logo/>
        </div>
    )
}