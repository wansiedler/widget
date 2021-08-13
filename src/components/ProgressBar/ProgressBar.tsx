// import {useEffect, useState} from "preact/hooks";
// import React from "preact";

import React, {useState} from "react";
import {useEffect} from "react";
import {getRandomInt} from "../util";


const ProgressBar = ({color = '#A9ABC2', completed = 0}) => {

    const containerStyles = {
        padding: 0,
        margin: 0,
        height: 15,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: '0 50px 50px 0',
    }

    const labelStyles = {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    } as React.CSSProperties

    const [value, setValue] = useState(0);

    const fillerStyles = {
        padding: '0 20px 0 0',
        transition: 'width 1s ease-in-out',
        height: 15,
        fontSize: 15,
        width: `${value}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right'
    } as React.CSSProperties

    useEffect(() => {
        if (completed) {
            let timer = setInterval(() => {
                if (value <= completed) {
                    // console.log(`${value} ${completed}`)
                    setValue(previousCount => previousCount + 1)
                } else {
                    clearInterval(timer)
                }
            }, 10);
            return () => clearInterval(timer)
        }
    });

    useEffect(() => {
        if (!completed) {
            let timer = setInterval(() => setValue(getRandomInt(100)), 1000);
            return () => clearInterval(timer)
        }
    }, []);

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{completed ? `${value}%` : "?"}</span>
            </div>
        </div>
    );
};
export default ProgressBar;