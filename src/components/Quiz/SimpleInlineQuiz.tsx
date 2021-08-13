import React, {useContext, useEffect, useState} from "react";
import {getRandomInt} from "../util";
import {Logo} from "../Logo";
import SliderNoThumb from "../Marks/SliderNoThumb";
import Slider from "../Marks/Slider";
import {useDispatch, useSelector} from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import {Selects} from "./Selects";

export const SimpleInlineQuiz = ({story, content, onAnswer}) => {
    const [completed, setCompleted] = useState([2]);
    const [answered, setAnswered] = useState([]);

    const {quiz} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer = setInterval(() => setCompleted([getRandomInt(5),]), 300);
        return () => clearInterval(timer)
    });

    // const onAnswer = () => {
    //     story.onAnswer(story.id, item, story.choiceAmount, answered, setAnswered)
    // }

    return (
        <div className="quiz">
            <div className="question">
                <h3>{story.question}</h3>
            </div>

            {story.subtext && <p>{story.subtext}</p>}
            <Selects
                choiceAmount={story.choiceAmount}
                answered={answered}
            />

            <div
                style={{
                    // display: 'flex-wrap',
                    // flexWrap: 'wrap',
                    // flexFlow: 'column wrap',
                    // alignContent: 'flex-start'
                }}
            >
                {story.choices && story.choices.map((item, idx) => (
                    <label
                        id={item}
                        key={idx}
                        htmlFor={item}
                        className="label_inline"
                        onClick={(event) => story.onAnswer(story.name || story.id, item, story.choiceAmount, answered, setAnswered)}
                    >
                        <input type="radio" key={item} value={item}
                               hidden={true}
                        />{item}</label>
                ))}
            </div>
            <div className='compact'>
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
                            <ProgressBar/>
                        </div>

                    ))}
                {/*<SliderNoThumb*/}
                {/*    values={completed}*/}
                {/*    rtl={false}*/}
                {/*/>*/}
                {/*<Slider values={completed}/>*/}
            </div>
            {content && content}
            <Logo/>
        </div>
    )
}