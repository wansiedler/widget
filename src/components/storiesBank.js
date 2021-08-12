import React, {useEffect, useState} from 'react';
import {SimpleQuiz} from "./Quiz/SimpleQuiz";

export const staticStories = [
    // {
    //     content:
    //         ({config, messageHandler, action, isPaused, onAnswer, story}) => {
    //             const [value, setValue] = useState(0.5)
    //             return <div>
    //
    //             </div>
    //         }
    //
    //
    // },
    // {
    //     type: 'quiz',
    //     choices: [
    //         '20-29',
    //         '30-39',
    //         '40-49',
    //         '50-59',
    //         '60-69',
    //         '70-79',
    //     ],
    //     content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
    //
    //
    //         const testData = [
    //             {bgcolor: "orange", completed: getRandomInt(100)},
    //             {bgcolor: "#ef6c00", completed: getRandomInt(100)},
    //             {bgcolor: "gray", completed: getRandomInt(100)},
    //             {bgcolor: "purple", completed: getRandomInt(100)},
    //             {bgcolor: "#000", completed: getRandomInt(100)},
    //             {bgcolor: "blue", completed: getRandomInt(100)},
    //         ];
    //
    //         return <div>
    //
    //             <p>Danke für Ihre Antwort!</p>
    //             <p>Das sind die Ergebnise von anderen Grupen:</p>
    //
    //             <img style={{width: '100%'}}
    //                  alt={''}
    //                  src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_158673029_9707279704500119_78594.jpg"/>
    //
    //             {testData.map((item, idx) => (
    //                 <div
    //                     key={idx}
    //                 >
    //                     <div style={{
    //                         margin: '2px auto'
    //                     }}
    //                     >{story.choices[idx]}</div>
    //                     <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}
    //                                  onClick={onAnswer}
    //                     />
    //                 </div>
    //             ))}
    //
    //         </div>
    //     },
    // },
    {
        type: 'quiz',
        choiceAmount: 1,
        finished: false,
        question: "Wie stehen Sie zu höheren Kosten für Ihr Bankkonto?",
        choices: [
            '20-29',
            '30-39',
            '40-49',
            '50-59',
            '60-69',
            '70-79',
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            return <SimpleQuiz
                story={story}
            />
        }
    },
    {
        type: 'quiz',
        choiceAmount: 1,
        finished: false,
        id: 111,
        question: "Wie stehen Sie zu höheren Kosten für Ihr Bankkonto?",
        choices: [
            '0',
            '1',
            '2',
            '4',
            '5'
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            // action('pause')

            const [completed, setCompleted] = useState(Math.floor(Math.random() * 1000) + 1);
            const [answered, setAnswered] = useState(0);

            useEffect(() => {
                let timer = setInterval(() => setCompleted(completed + 1), getRandomInt(2000));
                return () => clearInterval(timer)
            });

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
            return <div>
                {/*<h1 className="question">{story.question}</h1>*/}
                <div className="question">{story.question}</div>
                <p> Schon {completed} Leser haben teilgenommen: </p>
                <p><span>Seien Sie der Nächste!</span></p>


                {/*<RubberSlider width={250} value={value} onChange={setValue}/>*/}

                {/*<Slider rtl={false}*/}
                {/*       onEnd={story.onAnswer}*/}
                {/*/>*/}

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
            </div>
        },
    },
    {
        type: 'quiz',
        choiceAmount: 2,
        finished: false,
        question: "Wie stehen Sie zu höheren Kosten für Ihr Bankkonto?",
        choices: [
            '20-29',
            '30-39',
            '40-49',
            '50-59',
            '60-69',
            '70-79',
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            // action('pause')
            return <div>
                <h1 className="question">{story.question}</h1>
                <p>Danke für Ihre Antwort!</p>
                <p>
                    Deine Altersgruppe sagt uns!
                </p>
                {/*<ReactSpeedometer*/}
                {/*    value={777}*/}
                {/*    currentValueText=" "*/}
                {/*    customSegmentLabels={[*/}
                {/*        {*/}
                {/*            text: "=(",*/}
                {/*            position: "INSIDE",*/}
                {/*            color: "#555",*/}
                {/*        },*/}
                {/*        {*/}
                {/*            text: "Schlimm",*/}
                {/*            position: "INSIDE",*/}
                {/*            color: "#555",*/}
                {/*        },*/}
                {/*        {*/}
                {/*            text: "OK",*/}
                {/*            position: "INSIDE",*/}
                {/*            color: "#555",*/}
                {/*            fontSize: "19px",*/}
                {/*        },*/}
                {/*        {*/}
                {/*            text: "Zufrieden",*/}
                {/*            position: "INSIDE",*/}
                {/*            color: "#555",*/}
                {/*        },*/}
                {/*        {*/}
                {/*            text: "(=",*/}
                {/*            position: "INSIDE",*/}
                {/*            color: "#555",*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*/>*/}
            </div>
        }
    },
    {
        type: 'quiz',
        choice: 1,
        finished: false,
        content: ({action, isPaused, onAnswer}) => {
            return <div>
                <p>Danke für Ihre Antwort!</p>
                <p> Interessiert wie es Ihre
                    Altersgruppe sieht?</p>
                <p> Geben Sie jetzt Ihr Alter an!</p>

            </div>
        },
    },
    {
        type: 'quiz',
        choice: 3,
        finished: false,
        content: ({action, isPaused, onAnswer}) => {
            return <div>
                <p>Question</p>
                <p>
                    Multiple choice max. 3 options: Wirtschaft, Politik, Karriere Verbraucher, Gesundheit, Wohnen
                    (correct answer marked green)
                </p>

            </div>
        },
    },
]
