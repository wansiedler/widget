import React, {useEffect, useState} from 'react';
// import Stories, {WithSeeMore} from 'react-insta-stories'
// import CircleBar from "./CircleBar";
// import {CustomSegmentLabels} from "./CustomSegmentLabels/CustomSegmentLabels"
// import DragAcr from "drag-arc/src";
// import ReactSlider from 'react-slider'
// import {Gauge} from "./Gauge/Gauge";
// import {CircleSlider} from "./circleSlider";
// import RubberSlider from '@shwilliam/react-rubber-slider'
// import "@reach/slider/styles.css";
// import '@shwilliam/react-rubber-slider/dist/styles.css'
// import {CircleSlider} from "react-circle-slider/src/index";
// import Slider from "./Slider/Slider";
import {SimpleQuiz} from "./Quiz/SimpleQuiz";
import {getRandomInt} from "./util";
import ProgressBar from "./ProgressBar/ProgressBar";
import {NoReaction} from "./Quiz/NoReaction";
import {Result} from "./Quiz/Result";
import WithSeeMore from "./react-insta-stories/renderers/wrappers/WithSeeMore";
import {restart} from "./store/actions/quizzes";
import {useDispatch} from "react-redux";
import {Newsletter} from "./Quiz/Newsletter/Newsletter";
import {NewsletterQuiz} from "./Quiz/Newsletter/NewsletterQuiz";
import {LabelResult} from "./Quiz/LabelResult";

export const traditionalWissenStories = [
    // {
    //     type: 'quiz',
    //     choiceAmount: 1,
    //     question: "Traditionalist Wissen ->",
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
        choiceAmount: 3,
        question: "Wie ist ihr Wissenstand im Vergleich in ihren Interessenbereichen?",
        subtext: '',
        choices: [
            'Wirtschaft',
            'Politik',
            'Coronavirus',
            'Karriere',
            'Gesundheit',
            'Verbraucher',
            'Wohnen',
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            // action('pause')
            return <SimpleQuiz
                story={story}
            />
        }
    },

    {
        type: 'quiz',
        choiceAmount: 1,
        finished: false,
        question: "Wer ist Kanzlerkandidat/-in der Grünen?",
        subtext: '',
        choices: [
            'Bearbock',
            'Laschet',
            'Merkel',
            'Steinmeier',
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            return <SimpleQuiz
                story={story}
            />
        }
    },
    // {
    //     type: 'quiz',
    //     choiceAmount: 1,
    //     finished: false,
    //     question: "Sie sind fast fertig mit ihrem Quiz.",
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
        choiceAmount: 1,
        finished: false,
        question: "Hier ist ihr Ergebnis! Danke für die Teilnahme.",
        subtext: '',
        choices: [
            'Globales Wissensergebnis: Im Vergleich zu unseren Lesern sind 20% besser als Sie',
            // 'Detailliertes Ergebnis: Aufschlüsselung der Ergebnisse',
        ],
        content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
            return <LabelResult
                story={story}
            />
        }
    },
    {
        type: 'quiz',
        choiceAmount: 1,
        finished: false,
        question: "Wir haben da noch was für Sie!",
        subtext: '',
        content: ({config, messageHandler, action, isPaused, onAnswer, story, toggleMore}) => {

            // return <WithSeeMore story={story} action={action}>
            //     <SimpleQuiz
            //         story={story}
            //         content={content}
            //     />
            // </WithSeeMore>
            return <NewsletterQuiz
                    story={story}
                />
        },

        // seeMoreCollapsed: ({toggleMore, action}) => <p style={customSeeMore}
        //                                                onClick={() => toggleMore(true)}>Newsletter</p>,
        // // seeMoreCollapsed: ({toggleMore, action}) => <p style={customSeeMore}> </p>,
        // seeMore: ({close}) => {
        //     const dispatch = useDispatch();
        //     return <div style={{
        //         maxWidth: '100%', height: '100%', padding: 40, background: 'white',
        //         backgroundColor: "rgb(249, 249, 249)",
        //         lineHeight: '1em'
        //     }}>
        //         <a
        //             style={{
        //                 color: "green",
        //                 position: "absolute",
        //                 top: 40,
        //                 right: 40,
        //                 zIndex: 100
        //             }}
        //             onClick={() => {
        //                 // dispatch(restart())
        //                 close()
        //             }}
        //         >
        //             ⨉
        //         </a>
        //         <img
        //             // style=""
        //             style={{
        //                 // backgroundImage: 'url(https://images.fanmatics.com/74161004-brand.png)',
        //                 height: 35,
        //                 width: 170,
        //                 position:'absolute',
        //                 bottom: 10,
        //                 right: 20
        //                 // float: 'right'
        //             }
        //             }
        //             src={"https://images.fanmatics.com/74161004-brand.png"}
        //         />
        //         <h3>Ihr Bayern-Newsletter</h3>
        //         <p>Zweimal pro Woche die wichtigsten Neuigkeiten in Ihrem Postfach</p>
        //
        //         <input
        //             style={{
        //                 width: '90%'
        //             }}
        //         />
        //         <button className="button">Zum Newsletter anmelden →</button>
        //
        //         <span
        //             style={{
        //                 fontSize: 10
        //             }}
        //         >Mit Klick auf den Button &ldquo;Zum Newsletter anmelden&ldquo; stimme ich den <a
        //             href={'https://www.merkur.de/ueber-uns/datenschutz/'}>Datenschutzbestimmungen</a> zu.</span>
        //
        //         {/*<p style={{textDecoration: 'underline'}} onClick={close}>*/}
        //         {/*    close</p>*/}
        //
        //     </div>
        // },
        duration: 5000
    },
]
const customSeeMore = {
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: 14,
    bottom: 20,
    position: 'relative'
}
