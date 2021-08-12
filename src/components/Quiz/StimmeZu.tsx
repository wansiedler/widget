import React, {useContext, useEffect, useState} from "react";
import {getRandomInt} from "../util";
import Slider from "../Marks/Slider";
import {Logo} from "../Logo";

export const StimmeZu = ({value}) => {

    return    <div
        style={{
            width: '100%',
            // display: 'flex',
            // flexWrap: 'wrap'
        }}
    >
        <div
            style={{
                // position: "absolute",
                width: 80,
                marginRight: 10,
                float: 'left'
                // top:10
            }}
        >stimme gar nicht zu
        </div>
        <div
            style={{
                // position: "absolute",
                width: 80,
                marginLeft: 10,
                float: 'right'
                // top:10,
            }}
        >
            stimme voll zu
        </div>
    </div>
    {/*{dragged &&*/}
    {/*<output style={{marginTop: '30px'}}>{meinung[values[0]]}</output>*/}


}