import React from "react";

export const Logo = (props) => {
    return (
        <a style={{
            display: "block",
            position: "absolute",
            bottom: 10,
            right: 15,
            zIndex: 100,
            width: 30,
            height: 30
        }}
           href="https://www.merkur.de/"
        >
            <img src="https://www.ortografie.ch/img/merkurde-logo.svg"
                 style={{
                     width:'100%',
                     height:'100%'
                 }}
                 // width="30"
                 // height="30"
                 alt="merkur.de"/>
        </a>
    )
}