import React, {useContext, useEffect, useState} from "react";
import {getRandomInt} from "../../util";
import {Logo} from "../../Logo";
import {Newsletter} from "./Newsletter";

export const NewsletterQuiz = ({story, content, onAnswer, ...props}) => {
    const [completed, setCompleted] = useState(false);
    return (
        <div className="quiz">
            <div className="question">
                <h3>{story.question}</h3>
            </div>
            <Newsletter
                text={"Ihre Nachrichten-Übersicht"}
                subtext="Der Politik-Überblick für Bayern, Deutschland und die Welt."
            />
            <Logo/>
        </div>
    )
}