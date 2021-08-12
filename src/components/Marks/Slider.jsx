import * as React from 'react';
// import {Range, getTrackBackground} from "react-range";
import {Range} from "../react-range";
import {StimmeZu} from "../Quiz/StimmeZu";

const STEP = 1;
const MIN = 0;
const MAX = 4;

const Slider: React.FC<{ rtl: boolean, onEnd: Function }> = ({rtl, onEnd}) => {
    const [values, setValues] = React.useState([2]);
    const [dragged, setDragged] = React.useState(false);

    const meinung = [
        {bgcolor: "red", value: "=("},
        {bgcolor: "orange", value: "Schlimm"},
        {bgcolor: "gray", value: "OK"},
        {bgcolor: "purple", value: "Zufrieden"},
        {bgcolor: "green", value: "(="}
    ]

    return (
        <div>
            <div
                style={{
                    width: 300,
                    margin: '80px auto 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <Range
                    values={values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    rtl={rtl}
                    onFinalChange={value => {
                        console.log(value)
                        // setValues(value)
                        onEnd(value)
                    }
                    }
                    onChange={(values) => {
                        setDragged(true)
                        setValues(values)
                    }}
                    renderMark={({props, index}) => {
                        // console.log(props)
                        return (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '10px',
                                    width: '10px',
                                    // backgroundColor: index * STEP < values[0] ? '#84BF06' : '#ccc',
                                    // border: `1px solid ${index * STEP < values[0] ? '#ccc' : '#000'}`,
                                    border: `1px solid ${index * STEP < values[0] ? '#84BF06' : '#84BF06'}`,
                                    // backgroundColor: index * STEP < values[0] ? '#84BF06' : '#ccc',
                                    backgroundColor: '#84BF06',
                                    borderRadius: '5px'
                                }}
                            />
                        )
                    }
                    }
                    renderTrack={({props, children}) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px',
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '10px',
                                    width: '100%',
                                    // borderRadius: '4px',
                                    background: '#000',
                                    // background: getTrackBackground({
                                    //     values: values,
                                    //     opacity: 1,
                                    //     colors: ['#84BF06', '#000'],
                                    //     min: MIN,
                                    //     max: MAX,
                                    //     direction: "to right",
                                    //     rtl
                                    // }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({props, isDragged}) => {
                        return (
                            <div
                                {...props}
                                id='renderThumb'
                                style={{
                                    ...props.style,
                                    height: '42px',
                                    width: '42px',
                                    borderRadius: '42px',
                                    backgroundColor: '#FFF',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0px 2px 6px #AAA'
                                }}
                            >
                                <div
                                    style={{
                                        height: '42px',
                                        width: '42px',
                                        borderRadius: '42px',
                                        backgroundColor: isDragged || dragged ? '#84BF06' : '#CCC'
                                    }}
                                />
                            </div>
                        )
                    }}
                />

            </div>

            <StimmeZu/>

            {dragged &&
            <div style={{
                marginTop: '30px',
                color: meinung[values[0]].bgcolor,
                textAlign: 'center'
            }}>{meinung[values[0]].value}</div>
            }
            {
                !dragged && <div
                    style={{
                        textAlign: 'center'
                    }
                    }
                >?</div>
            }
        </div>
    )
}

export default Slider;