// @ts-ignore
import React, {useContext} from "react";
import {useSelector} from "react-redux";
// import {useEffect} from "preact/hooks";
import {useEffect} from "react";

export const QuizAnswer = (props) => {

    let classNames = `${props.answersFormat}-answer round-border `;
    // console.log(props.answerOption)
    const minHeight = props.answerOption.hasOwnProperty("height") ? props.answerOption.height : props.answersHeight;
    // const labelStyle = `
    //         // min-height: ${minHeight && props.answersFormat !== 'text' ? minHeight + 'em' : null};
    //         min-height: 8em;
    //         color: ${props.answerOption.color ? props.answerOption.color : null};
    //         background-size: cover;
    //         background-color: ${props.answerOption.backgroundColor ? props.answerOption.backgroundColor : null};
    //         background-image: ${props.answerOption.backgroundImage ? 'url(' + props.answerOption.backgroundImage + ')' : null};
    //         background-position: ${props.answerOption.backgroundPosition ? props.answerOption.backgroundPosition : 'center'};
    //     ` as React.CSSProperties;

    const labelStyle = {
        minHeight: '7em',
        color: props.answerOption.color ? props.answerOption.color : null,
        backgroundSize: 'cover',
        backgroundColor: props.answerOption.backgroundColor ? props.answerOption.backgroundColor : null,
        backgroundImage: props.answerOption.backgroundImage ? 'url(' + props.answerOption.backgroundImage + ')' : null,
        backgroundPosition: props.answerOption.backgroundPosition ? props.answerOption.backgroundPosition : 'center',

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: '200px',
        borderTop: '3px solid gray',
        padding: '0 20px'

    } as React.CSSProperties;

    let textClassNames = '';
    const fontSize = props.answerOption.fontSize ? props.answerOption.fontSize : props.answersFontSize;

    const textStyle = {
        fontSize: `${fontSize && props.answersFormat !== 'text' ? fontSize : 1}em`,
        // textAlign: 'center',
        // textAlignVertical: "center",
        // padding: '0 20px',
        // borderTop: '2px solid black',
        // height: '100px',
        // margin: '0 auto',
        // lineHeight: '100px'
    }

    if (props.answerOption.textStroke === 'stroke') {
        textClassNames = 'text-stroke';
        // textStyle.
        // textStyle += `-webkit-text-stroke-width: ${Number(0.1 / props.answersFontSize).toFixed(3)}em;`;
    }
    useEffect(()=>{
        // console.log(props.selected)
    },[props.selected])

    return (
        <div className={`answer-option-container ${props.answersFormat}-container`}>
            {props.answerOption.textPosition === 'top' && props.answerOption.value ?
                <p className={textClassNames}>{props.answerOption.value}</p> : null}
            <input
                type="radio"
                name={props.fieldset}
                id={props.id}
                value={props.answerOption.result}
                onClick={props.onAnswer}
                //{...(props.selected? { className: 'selected' } : {})}
            />
            <label htmlFor={props.id}
                   className={classNames + (props.selected === props.answerOption.result ? ' selected' : '')}
                   style={labelStyle}
                   // onClick={props.onAnswer}
            >
                {props.answerOption.textPosition === 'inline' && props.answerOption.value ?
                    <p className={textClassNames} style={textStyle}>

                        {props.answerOption.value}

                    </p> : null}
                {props.finished && (props.type === "Quiz-Trivia") ?
                    <div className="trivia-result">
                        {props.answerOption.answer > 0 ?
                            <div className="answer-result-icon svg-background-green">
                                <svg viewBox="0 0 38 38">
                                    <path
                                        d="M30.9 8l-17 16.9-6.8-6.8L4.3 21l6.8 6.8c1.6 1.6 4.2 1.6 5.8 0l16.9-16.9L30.9 8z"/>
                                </svg>
                            </div>
                            :
                            <div className="trivia-result-wrong answer-result-icon svg-background-red">
                                <svg viewBox="0 0 38 38">
                                    <path
                                        d="M30.3 10.5l-2.8-2.8-8.5 8.5-8.5-8.5-2.8 2.8 8.5 8.5-8.5 8.5 2.8 2.8 8.5-8.5 8.5 8.5 2.8-2.8-8.5-8.5z"/>
                                </svg>
                            </div>
                        }
                    </div>
                    : null
                }
            </label>
            {/*{props.answerOption.imageCredit ?*/}
            {/*    <pre className={textClassNames}>via {props.answerOption.imageCredit}</pre> : null}*/}
            {props.answerOption.textPosition === 'bottom' && props.answerOption.value ?
                <p className={textClassNames}>{props.answerOption.value}</p> : null} </div>)
}