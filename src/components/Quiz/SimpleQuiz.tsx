import React, {useContext, useEffect, useState} from "react";
import {getRandomInt} from "../util";
import {Logo} from "../Logo";

export const SimpleQuiz = ({story, content, onAnswer}) => {
    const [completed, setCompleted] = useState([0]);
    const [answered, setAnswered] = useState(0);
    return (
        <div className="quiz">
            <div className="question">
                <h3>{story.question}</h3>
            </div>

            {story.subtext && <p>{story.subtext}</p>}
            {<p
                style={{
                    lineHeight: 0,
                    fontSize: 10,
                    padding: 0,
                    margin: 0,
                    marginTop: 5,
                    // position: "relative",
                    position: "absolute",
                    top: 170,
                    left: 115
                }}
            ><span>
                        (Example with {story.choiceAmount} selects: {story.choiceAmount - answered} option{story.choiceAmount - answered > 1 ? "s" : ""} left)
                    </span>
            </p>
            }

            {story.choices && story.choices.map((item, idx) => (
                <label
                    id={item}
                    key={item}
                    htmlFor={item}
                    className="label"
                    onClick={(event) => story.onAnswer(story.id, item, story.choiceAmount, answered, setAnswered)}
                >
                    <input type="radio" key={item} value={item}
                           hidden={true}
                    />{item}</label>
            ))}
            {content && content}
            <Logo/>
        </div>
    )
}