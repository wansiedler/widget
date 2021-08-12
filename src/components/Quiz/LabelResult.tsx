import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import {Logo} from "../Logo";
import {getRandomInt} from "../util";
import RoundProgressBar from "../ProgressBar/RoundProgressBar";

export const LabelResult = ({story, content, ...props}) => {
    const [completed, setCompleted] = useState([0]);
    const [answered, setAnswered] = useState(0);
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
                {story.choiceAmount > 1 && <p><span><br/>
                        (Example with 2 selects: {story.choiceAmount - answered} option{story.choiceAmount - answered > 1 ? "s" : ""} left)
                    </span>
                </p>
                } {story.choices && story.choices.map((item, idx) => (
                <span
                    id={item}
                    key={idx}
                    className="label_ergebnis"
                    onClick={(event) => story.onAnswer(story.id, item, story.choiceAmount, answered, setAnswered)}
                >
                    {item}
                </span>
            ))}
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