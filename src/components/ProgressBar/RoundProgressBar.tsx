// import {useEffect, useState} from "preact/hooks";
// import React from "preact";


import React, {useState} from "react";
import {useEffect} from "react";
import {getRandomInt} from "../util";


const RoundProgressBar = (props: any) => {
    const {bgcolor} = props;

    const containerStyles = {
        height: 15,
        width: '90%',
        // width: '200px',
        // margin: "0 auto",
        backgroundColor: "#e0e0de",
        borderRadius: '0 50px 50px 0',
        // margin: 50
    }

    const labelStyles = {
        padding: 0,
        font: '15px/-10px Arial, serif',
        margin: 0,
        // fontSize: 10,
        // lineHeight:10,
        color: 'white',
        fontWeight: 'bold'
    } as React.CSSProperties

    const [completed, setCompleted] = useState(props.completed);
    const fillerStyles = {
        transition: 'width 1s ease-in-out',
        height: '100%',
        fontSize: '24px',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    } as React.CSSProperties

    // useEffect(() => {
    //     let timer = setInterval(() => setCompleted(getRandomInt(100)), 200);
    //     return () => clearInterval(timer)
    // }, []);

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                {/*<span style={labelStyles}>{`${completed}%`}</span>*/}
            </div>
        </div>
    );
};
export default RoundProgressBar;