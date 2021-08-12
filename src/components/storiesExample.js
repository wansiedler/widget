import React, {useEffect, useState} from 'react';
import {SimpleQuiz} from "./Quiz/SimpleQuiz";
import {getRandomInt} from "./util";
import WithSeeMore from "./react-insta-stories/renderers/wrappers/WithSeeMore";

export const staticStories = [
    {
        content: ({action, isPaused}) => {
            return <div style={contentStyle}>
                <h1>OK, Diego</h1>
                <video src="https://thumbs.gfycat.com/TiredConsiderateBarb-mobile.mp4"
                       playsInline="true"
                       autoPlay="true"
                       width={300}
                       webkit-playsinline="true"
                       loop
                       style={image}
                       id="width: auto; max-width: 100%; max-height: 100%; margin: auto;"
                />

                <p>First of all, <span style={{fontWeight: 'bold'}}>gracias</span> for this opportunity to work and
                    develop my skills in an awesome team.</p>
                <p>Second of all, the quizzes are going to be randomized by other content, like videos, gifs and any
                    kind of anymation</p>
                <p>Possibilities are endless! =)</p>
                {/*<p>Ok, here is an image for starters!</p>*/}
                <br/>
                <img style={image}
                     src="https://image.slidesharecdn.com/definitions-of-designations-1232049505848030-3/95/definitions-of-designations-2-728.jpg?cb=1232263441"/>
                {/*<div style='position:relative; padding-bottom:calc(135.20% + 44px)'>*/}
                {/*    <iframe src='https://gfycat.com/ifr/ValuableBlindGoat' frameBorder='0' scrolling='no' width='100%'*/}
                {/*            height='100%' style='position:absolute;top:0;left:0;' allowFullScreen></iframe>*/}
                {/*</div>*/}
            </div>
        }
    },
    {
        content: Story2
    },
    {
        url: 'https://picsum.photos/1080/1920',
        seeMore: ({close}) => {
            return (<div style={{maxWidth: '100%', height: '100%', padding: 40, background: 'white'}}>
                <h2>
                    =)
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcqw5et-62e3edb5-4a11-43a3-89ab-9f45b0b2e02e.png/v1/fill/w_900,h_1005,strp/a_bottle_of_red_wine_on_a_transparent_background_by_prussiaart_dcqw5et-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwNSIsInBhdGgiOiJcL2ZcLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvZGNxdzVldC02MmUzZWRiNS00YTExLTQzYTMtODlhYi05ZjQ1YjBiMmUwMmUucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qa3aENR9nYVX8WtDd1mSYr-4aVpWAwhKipV4aD7EUhI"/>
                </h2>
                <p style={{textDecoration: 'underline'}} onClick={close}>
                    Go on, close this popup.
                </p>
            </div>)
        }
    },
    {
        url: 'https://thumbs.gfycat.com/ValuableBlindGoat-mobile.mp4',
        type: 'video'
    },
    {
        url: 'https://cdn.jpg.wtf/futurico/9c/10/1625556983-9c10f7e5e75a4f41294fed02c13c255f.mp4',
        type: 'video'
    },
    {
        content: ({action, story}) => {
            return <WithSeeMore story={story} action={action}>
                <div style={{background: 'snow', padding: "0 20px", height: '100%'}}>
                    <h1 style={{marginTop: '100%', marginBottom: 0}}>🌝</h1>
                    <h1 style={{marginTop: 5}}>Here is a joke for starters</h1>
                    <p style={{marginTop: 5}}>Click "see more" in the bottom</p>
                </div>
            </WithSeeMore>
        },
        seeMoreCollapsed: ({toggleMore, action}) => <p style={customSeeMore} onClick={() => toggleMore(true)}>See More
            =)</p>,
        seeMore: ({close}) => <div style={{maxWidth: '100%', height: '100%', padding: 40, background: 'white'}}>

            <img style={image}
                 src="https://pbs.twimg.com/media/CkbcTC7WkAAqNzh.jpg"/>
            <p style={{textDecoration: 'underline'}} onClick={close}>
                Go on, close
                this popup.</p>
        </div>,
        duration: 5000
    },
]

const image = {
    display: 'block',
    borderRadius: 4,
    width: '100%',
    margin: '0 auto'
}

const contentStyle = {
    textAlign: 'center',
    color: '#484848',
    // background: '#333 no-repeat center/100% url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_158673029_9707279704500119_78594.jpg)',
    width: '100%',
    // padding: '0  20px',
    height: '100%',
}

const customSeeMore = {
    textAlign: 'center',
    fontSize: 14,
    bottom: 20,
    position: 'relative'
}
const customSeeMore2 = {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    bottom: 20,
    position: 'relative'
}

const Story2 = ({action, isPaused}) => {
    return <div style={{
        ...contentStyle,
        background: 'white',
        color: '#333'
    }}>
        <h1>You get the control of the story.</h1>
        <p>Press da space!</p>
        <h1>{isPaused ? 'Paused!' : 'Playing'}</h1>
        <p>{isPaused ? 'U can control the app with arrow keys and the spacebar. press → on the keyboard' : ''}</p>

    </div>
}

const testData = [
    {bgcolor: "orange", completed: getRandomInt(100)},
    {bgcolor: "#ef6c00", completed: getRandomInt(100)},
    {bgcolor: "gray", completed: getRandomInt(100)},
    {bgcolor: "purple", completed: getRandomInt(100)},
    {bgcolor: "#000", completed: getRandomInt(100)},
    {bgcolor: "blue", completed: getRandomInt(100)},
];