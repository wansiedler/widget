import React, {useEffect, useState} from 'react';
import {SimpleQuiz} from "./Quiz/SimpleQuiz";
import {getRandomInt} from "./util";
import {SliderQuiz} from "./Quiz/SliderQuiz";
import ProgressBar from "./ProgressBar/ProgressBar";
import {NoReaction} from "./Quiz/NoReaction";
import {Result} from "./Quiz/Result";
import {SimpleInlineQuiz} from "./Quiz/SimpleInlineQuiz";

export const traditionalAlterStories = [
    // {
    //     type: 'quiz',
    //     choiceAmount: 1,
    //     question: "Traditionalist Alter ->",
    //     subtext: '',
    //     choices: [
    //     ],
    //     content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
    //         // action('pause')
    //         return <SimpleQuiz
    //             story={story}
    //         />
    //     }
    // },
    {
        type: 'quiz',
        choiceAmount: 1,
        finished: false,
        id: 111,
        question: "Experten behaupten - Deutschland ist genauso unvorbereitet auf Unwetter wie auf eine Pandemie!",
        choices: [
            '0',
            '1',
            '2',
            '4',
            '5'
        ],
        // subtext: 'Vergleichen Sie jetzt ihre Meinung mit XXY Merkur Lesern.',
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            const [completed, setCompleted] = useState(getRandomInt(1000));
            let teilgenommen = <div>
                {/*<p> Schon {completed} Leser haben teilgenommen: </p>*/}
                <p> Vergleichen Sie jetzt ihre Meinung mit {completed} Merkur Lesern.  </p>
                {/*<p><span>Seien Sie der Nächste!</span></p>*/}
            </div>


            useEffect(() => {
                let timer = setInterval(() => setCompleted(completed + 1), getRandomInt(2000));
                return () => clearInterval(timer)
            });
            return <SliderQuiz
                story={story}
                subtext={teilgenommen}
            />
            // // action('pause')
            //
            // const [answered, setAnswered] = useState(0);
            //
            // useEffect(() => {
            //     let timer = setInterval(() => setCompleted(completed + 1), getRandomInt(2000));
            //     return () => clearInterval(timer)
            // });
            //
            // let handleChange = value => {
            //     action('pause')
            //     // console.log(`Changed value ${value}`);
            // };
            // let handleFinish = value => {
            //     action('play')
            //     setTimeout(function () {
            //         story.onAnswer(story.id, [value], story.choiceAmount, answered, setAnswered)
            //     }, 500);
            //     // clearInterval(setInterval(() => , getRandomInt(1000)))
            //
            // };
            // const [value, setValue] = useState(10)
            // return <div>
            //     {/*<h1 className="question">{story.question}</h1>*/}
            //     <div className="question">{story.question}</div>

            //
            //
            //     {/*<RubberSlider width={250} value={value} onChange={setValue}/>*/}
            //
            //     {/*<Slider rtl={false}*/}
            //     {/*       onEnd={story.onAnswer}*/}
            //     {/*/>*/}
            //
            //     {/*<CircleSlider*/}
            //     {/*    circleColor={"#000"}*/}
            //     {/*    size={250}*/}
            //     {/*    value={0}*/}
            //     {/*    progressColor={"#84BF06"}*/}
            //     {/*    knobColor={"#84BF06"}*/}
            //     {/*    circleWidth={10}*/}
            //     {/*    progressWidth={10}*/}
            //     {/*    knobRadius={20}*/}
            //     {/*    stepSize={1}*/}
            //     {/*    min={0}*/}
            //     {/*    max={4}*/}
            //     {/*    disabled={false}*/}
            //     {/*    shadow={false}*/}
            //     {/*    showTooltip={true}*/}
            //     {/*    showPercentage={false}*/}
            //     {/*    tooltipSize={32}*/}
            //     {/*    tooltipColor={"#84BF06"}*/}
            //     {/*    onChange={*/}
            //     {/*        handleChange*/}
            //     {/*    }*/}
            //     {/*    onFinish={*/}
            //     {/*        handleFinish*/}
            //     {/*    }*/}
            //     {/*/>*/}
            // </div>
        },
    },
    {
        type: 'quiz',
        name:'age',
        choiceAmount: 1,
        finished: false,
        question: "Interessiert wie es in Ihrer Altersgruppe aussieht?",
        subtext: 'Geben Sie jetzt ihr Alter an.',
        choices: [
            '20-29',
            '30-39',
            '40-49',
            '50-59',
            '60-69',
            // '70-79',
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            return <SimpleInlineQuiz
                story={story}
            />
        }
    },
    // {
    //     type: 'quiz',
    //     choiceAmount: 1,
    //     finished: false,
    //     question: "Nur noch ein Schritt, bis Sie ihr Quizergebnis erhalten.",
    //     subtext: '',
    //     choices: [
    //         'Trotzdem verlassen.',
    //         'Ok, weiter quizzen!',
    //     ],
    //     content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
    //         return <NoReaction
    //             story={story}
    //         />
    //     }
    // },
    {
        type: 'quiz',
        choice: 1,
        finished: false,
        question: "Danke für deine Teilnahme!",
        content: ({action, isPaused, onAnswer, story}) => {
            let subtext = <div>
                <p>Ihre Meinung stimmt zu 35 Prozent mit ihrer Altersgruppe überein</p>
            </div>
            return <Result
                story={story}
                // subtext={subtext}
            />
        },
    },

]
