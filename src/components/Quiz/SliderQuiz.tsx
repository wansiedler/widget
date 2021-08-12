import React, {useContext, useEffect, useState} from "react";
import {getRandomInt} from "../util";
import Slider from "../Marks/Slider";
import {Logo} from "../Logo";

export const SliderQuiz = ({action, story, content, onAnswer, ...props}) => {
    const [completed, setCompleted] = useState(getRandomInt(1000));
    const [answered, setAnswered] = useState(0);


    let handleChange = value => {
        action('pause')
        // console.log(`Changed value ${value}`);
    };
    let handleFinish = value => {
        action('play')
        setTimeout(function () {
            story.onAnswer(story.id, [value], story.choiceAmount, answered, setAnswered)
        }, 500);
        // clearInterval(setInterval(() => , getRandomInt(1000)))

    };
    const [value, setValue] = useState(10)


    //TODO
    //add green light color from the center

    return <div
        style={{
            width: '100%',
            height: '100%'
        }}
        className="quiz"
    >
        <div className="question">
            <h3>{story.question}</h3>
        </div>

        {story.subtext && <div

            style={{
                width: 290,
                textAlign: 'center',
                margin: '0 auto'
            }}
        >{story.subtext}</div>}
        {props.subtext && <div
            style={{
                width: 290,
                textAlign: 'center',
                margin: '0 auto'
            }}
        >{props.subtext}</div>}
        <Slider rtl={false}
                onEnd={story.onAnswer}
        />

        {/*<CircleSlider*/}
        {/*    circleColor={"#000"}*/}
        {/*    size={250}*/}
        {/*    value={0}*/}
        {/*    progressColor={"#84BF06"}*/}
        {/*    knobColor={"#84BF06"}*/}
        {/*    circleWidth={10}*/}
        {/*    progressWidth={10}*/}
        {/*    knobRadius={20}*/}
        {/*    stepSize={1}*/}
        {/*    min={0}*/}
        {/*    max={4}*/}
        {/*    disabled={false}*/}
        {/*    shadow={false}*/}
        {/*    showTooltip={true}*/}
        {/*    showPercentage={false}*/}
        {/*    tooltipSize={32}*/}
        {/*    tooltipColor={"#84BF06"}*/}
        {/*    onChange={*/}
        {/*        handleChange*/}
        {/*    }*/}
        {/*    onFinish={*/}
        {/*        handleFinish*/}
        {/*    }*/}
        {/*/>*/}
        <Logo/>
    </div>
}