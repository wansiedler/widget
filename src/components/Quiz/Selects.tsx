import React, {useContext, useEffect, useState} from "react";
import {getRandomInt} from "../util";
import Slider from "../Marks/Slider";
import {Logo} from "../Logo";

export const Selects = ({choiceAmount = 0, answered}) => {

    return (
        <span>
            {choiceAmount > 1 && `${choiceAmount} select${choiceAmount > 1 ? "s" : ""}: ${choiceAmount - answered} option${choiceAmount - answered > 1 ? "s" : ""} left)`}
        </span>
    )

}