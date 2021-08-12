// import React from "preact";
// import {useEffect} from "preact/hooks";
import React from "react";
import {useEffect} from "react";

// import LogRocket from 'logrocket';
//
// LogRocket.init('wnikwr/webapppp');
// // This is an example script - don't forget to change it!
// LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
//     name: 'James Morrison',
//     email: 'jamesmorrison@example.com',
//
//     // Add your own custom user variables here, ie:
//     subscriptionType: 'pro'
// });

import './App.css';
import Stories, {WithSeeMore} from './react-insta-stories';
import {useDispatch, useSelector} from "react-redux";
import {answer, getQuizzes, idle, nextStory, nextUnansweredStory, postResult} from "./store/actions/quizzes";
import {store} from "./store/store";
import {QuizQuestion} from "./Quiz/Fabian/QuizQuestion";

import {
    GET_RESULTS,
    SET_INDEX,
    RESET,
    UPDATE_ANSWERED,
    GET_QUIZZES,
    UPDATE_STORIES, ANSWERED, NEXT_INDEX
} from './store/actions/action-types';

import {traditionalWissenStories} from "./storiesTraditionalistWissen";
import {traditionalAlterStories} from "./storiesTraditionalistAge";
import {log} from "./util";

const xsss = {
    clients: "https://widget-provider.production.ippen.space/api/clients/",
    widgets: "https://widget-provider.production.ippen.space/api/widgets/",
    widgettypes: "https://widget-provider.production.ippen.space/api/widgettypes/",
    widgetsubmits: "https://widget-provider.production.ippen.space/api/widgetsubmits/",
    widgetimage: "https://widget-provider.production.ippen.space/api/widgetimage/",
}

const uiWidgetBundle = 'https://widget-provider.staging.ippen.space/widget-components/bundle.ui-widget.js'
const localUrl = "/api/widgets"
const productionUrl = "https://widget-provider.production.ippen.space/api/widgets/58" //django_rest
const stagingUrl = "https://widget-provider.staging.ippen.space/widget_data/buzzfeed" //fast-api

import IdleTimer, {useIdleTimer} from 'react-idle-timer/dist/modern'

export const App = function () {
    const {quiz} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getQuizzes(stagingUrl, 56))
        // getQuizzes(stagingUrl, 56)
    }, [])

    function quizRepeat() {

    }

    useEffect(() => {
        let stories = quiz.questions.map((question) => {
            return {
                type: 'quiz',
                content: ({action, isPaused = true}) => {
                    // useEffect(() => {
                    //     setTimeout(() => {
                    //         action('pause');
                    //         setTimeout(() => {
                    //             action('play');
                    //         }, 2000);
                    //     }, 100);
                    // }, []);
                    //         action('pause');
                    return <QuizQuestion
                        onAnswer={onAnswer}
                        question={question}
                        quizRepeat={quizRepeat}
                    />
                },
            }
        });
        dispatch(
            {
                type: UPDATE_STORIES,
                payload: [
                    // traditionalAlterStories[1],
                    ...traditionalAlterStories,
                    ...traditionalWissenStories,
                    // ...stories
                ],
                // payload: [...staticStories, ...stories].map((a) => ({sort: Math.random(), value: a}))
                //     .sort((a, b) => a.sort - b.sort)
                //     .map((a) => a.value),
                // payload: [...stories],
            }
        );
    }, [quiz.questions])

    function onAnswer(name, values, choiceAmount, answered, setAnswered) {
        // event.preventDefault();
        if (choiceAmount > 1) {
            setAnswered(answered + 1)
            if (answered + 1 < choiceAmount) {
                return
            }
        }
        dispatch(answer(name, values));
        log(Object.entries(quiz.answeredQuestions).length + " out of " + quiz.questions.length + ":" + name + " " + values)
        if (Object.entries(quiz.answeredQuestions).length === quiz.questions.length) {
            console.log("finished")
            console.log(quiz.answeredQuestions)
            const result = getResult()

        } else {
            // console.log(quiz.currentIndex)
            // dispatch(nextUnansweredStory());
            dispatch(nextStory());
        }
    }

    function getResult() {
        const result = quiz.type === 'Quiz-Personality' ? getResultPersonality() : getResultTrivia();
        return (
            <div className="answer-wrapper">
                <div className="answer-container">
                    <div className="answer-header">
                        <h2>{quiz.title}</h2>
                    </div>
                    <div className="answer-content-container">
                        <div className="answer-content">
                            <h3>{result.result}</h3>
                            <p>{result.answerSubtext}</p>
                            <div className="answer-share-container"/>
                        </div>
                    </div>
                    <video
                        width={300}
                        style={{margin: '10px auto 0 auto'}}
                        controls={false}
                        playsInline
                        autoPlay
                        loop
                        src='https://thumbs.gfycat.com/VictoriousShamelessEel-mobile.mp4'/>
                    <div className="quiz-repeat" onClick={quizRepeat}>
                        <svg id="icon-replay" viewBox="0 0 38 38">
                            <path
                                d="M34 19c0 8.3-6.7 15-15 15S4 27.3 4 19 10.7 4 19 4c3.4 0 6.5 1.1 9 3V3c0-1.1.9-2 2-2s2 .9 2 2v11H21c-1.1 0-2-.9-2-2s.9-2 2-2h4.3c-1.8-1.3-4-2-6.3-2-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11h4z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    function getResultPersonality() {
        const results = {};

        if (Object.entries(quiz.answeredQuestions).length <= 0) {
            return quiz.answeredQuestions.results['default'];
        }

        log(Object.entries(quiz.answeredQuestions).length)

        Object.entries(quiz.answeredQuestions).forEach((key, value) => {
            // console.log(key + "?" + key[1] + " " + results[key[1]] ? "1" : "0")
            results[key[1]] = results[key[1]] ? results[key[1]] + 1 : 1;
        });

        log(results)

        const sortable = [];
        for (const result in results) {
            sortable.push([result, results[result]]);
        }

        log(sortable)

        const sorted = sortable.sort(function (a, b) {
            return b[1] - a[1];
        });

        log(sortable)

        let finalResult = {};


        if (
            (sorted.length > 1 && sorted[0][1] === sorted[1][1]) ||
            sorted[0][0] === 'null'
        ) {
            finalResult = quiz.results['default'];
        } else {
            log(sorted[0][0])
            log(quiz.results)
            finalResult = quiz.results[sorted[0][0]];
        }
        log(finalResult)

        return finalResult;
    }

    function getResultTrivia() {
        if (Object.entries(quiz.answeredQuestions).length <= 0) {
            return quiz.results[0];
        }
        let sumAnswers = 0;
        Object.entries(quiz.answeredQuestions).forEach((key) => {
            sumAnswers += key[1] !== 'undefined' ? parseFloat(key[1]) : 0;
        });

        let finalResult = quiz.results[0];

        for (let i = 1; i < quiz.results.length; i++) {
            const _result = quiz.results[i];
            if (_result.minValue <= sumAnswers) {
                finalResult = _result;
            }
        }
        return finalResult;
    }


    return (
        <div className="App" id='App'>
            <div className="stories">
                {/*<IdleTimer*/}
                {/*    ref={ref => { idleTimer = ref }}*/}
                {/*    timeout={1000 * 3}*/}
                {/*    onActive={handleOnActive}*/}
                {/*    onIdle={handleOnIdle}*/}
                {/*    onAction={handleOnAction}*/}
                {/*    debounce={250}*/}
                {/*/>*/}
                {quiz.stories !== undefined && quiz.stories.length > 0 &&
                (<Stories
                    // loop={quiz.loop}
                    loop={false}
                    keyboardNavigation={true}
                    defaultInterval={15000}
                    stories={quiz.stories}
                    height={640}
                    width={400}
                    onAnswer={onAnswer}
                    currentIndex={quiz.currentIndex}
                />)}
            </div>
        </div>
    )
};



