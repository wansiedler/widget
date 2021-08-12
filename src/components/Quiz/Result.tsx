import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import {Logo} from "../Logo";
import {getRandomInt} from "../util";

export const Result = ({story, content, ...props}) => {
    const [completed, setCompleted] = useState([0]);
    const [answered, setAnswered] = useState(0);

    //TODO
    //add percentage numbers
    //add illustration of changing from 0 to X
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
                }
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
                            {key == 0 ? <ProgressBar
                                bgcolor='#84BF03'
                                completed={getRandomInt(100, 20)}
                            /> : <ProgressBar
                                bgcolor='#A9ABC2'
                                completed={getRandomInt(100,20)}
                            />}
                        </div>

                    ))}
                {content && content}
            </div>
            <Logo/>
        </div>
    )
}