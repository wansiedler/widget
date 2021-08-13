import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import {Logo} from "../Logo";
import {getRandomInt} from "../util";
import RoundProgressBar from "../ProgressBar/RoundProgressBar";
import {Selects} from "./Selects";
import {interactive} from "../store/actions/quizzes";
import {useDispatch} from "react-redux";

export const ResultLabel = ({story, content, ...props}) => {
    const [completed, setCompleted] = useState([0]);
    const [answered, setAnswered] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(interactive())
        }, 1000)
    }, []);

    return (
        <div className="quiz">
            <div>
                <div className="question">
                    <h3>{story.question}</h3>
                </div>
                {story.subtext && <div
                    className="label_ergebnis"
                    style={{
                        width: 290,
                        textAlign: 'center',
                        margin: '0 auto',
                        marginTop: 20
                    }}
                >
                    {story.subtext}
                </div>}

                <Selects
                    choiceAmount={story.choiceAmount}
                    answered={answered}
                />

                {
                    [
                        'Bereich A',
                        'Bereich B',
                        'Bereich C',
                    ].map((item, key) => (
                        <div
                            key={key}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                    marginTop: 20
                                }}
                            >{item}</span>
                            <RoundProgressBar
                                completed={getRandomInt(100)}
                                bgcolor='#84BF03'
                            />
                        </div>
                    ))
                }

                {content && content}
            </div>
            <Logo/>
        </div>
    )
}