import {QuizAnswer} from "./QuizAnswer";
import {useDispatch, useSelector} from "react-redux";
import {QuizState, RootState, store} from "../../store/store";

import {getQuizzes, postResult} from "../../store/actions/quizzes";
// import {useEffect} from "preact/hooks";

import React, {useContext} from "react";

import {
    GET_RESULTS,
    SET_INDEX,
    RESET,
    UPDATE_ANSWERED,
    GET_QUIZZES,
    UPDATE_STORIES,
    ANSWERED,
    NEXT_INDEX
} from '../../store/actions/action-types';
import {log} from "../../util";

export const QuizQuestion = (props) => {
    const containerStyle = {
        minHeight: `${props.question.height}em`,
        padding: "15px",
        // minHeight: '8em',
        color: props.question.question.color,
        backgroundColor: props.question.question.backgroundColor,
        backgroundImage: `url(${props.question.question.backgroundImage})`,
        backgroundPosition: props.question.question.backgroundPosition ? props.question.question.backgroundPosition : 'center'
    } as React.CSSProperties
    let textClassNames = '';
    let textStyle = {
        // fontSize: `${props.question.fontSize ? props.question.fontSize : 1}em`,
        // fontSize: `2em`,
        padding: 10
    } as React.CSSProperties;

    if (props.question.question.textStroke === "stroke") {
        textClassNames += ' text-stroke';
        // textStyle += `-webkit-text-stroke-width: 0.05em;`;
    }


    const quiz = useSelector((state: RootState): QuizState => state.quiz);
    const dispatch = useDispatch();


    // useEffect(() => {
    //
    // }, [quiz.answeredQuestions])


    let options = [];

    props.question.answersOptions.map((answerOption) => {
        answerOption && options.push(
            (<QuizAnswer id={answerOption.id}
                         fieldset={props.question.id}
                         answersFormat={props.question.answersFormat}
                         answersHeight={props.question.answersHeight} answersFontSize={props.question.answersFontSize}
                         answerOption={answerOption}
                         onAnswer={props.onAnswer}
                         selected={quiz.answeredQuestions[props.question.id] ? quiz.answeredQuestions[props.question.id] : null}
            />)
        );
    });

    return (
        <div
            style={{width: "100%"}}
        >
            {props.question.question.textPosition === 'top' && props.question.question.value ?
                <h3 className={textClassNames}>{props.question.question.value}</h3> : null}
            <div style={containerStyle} className="colored-tile question">
                {props.question.question.textPosition === 'inline' && props.question.question.value ?
                    <p className={textClassNames} style={textStyle}>{props.question.question.value}</p> : null}
            </div>
            {/*{props.question.imageCredit ? <pre>via {props.question.imageCredit}</pre> : null}*/}
            {props.question.question.textPosition === 'bottom' && props.question.question.value ?
                <p className={textClassNames}>{props.question.question.value}</p> : null}
            {options}
        </div>
    )
}