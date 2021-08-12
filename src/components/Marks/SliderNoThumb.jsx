import * as React from 'react';
import {getTrackBackground, Range} from "../react-range";
import {StimmeZu} from "../Quiz/StimmeZu";
// import { Range, getTrackBackground } from '../src/index';

const STEP = 1;
const MIN = 0;
const MAX = 4;

const SliderNoThumb: React.FC<{ rtl: boolean, values: number[] }> = ({rtl, values}) => {
    // const [values, setValues] = React.useState([2]);
    const [dragged, setDragged] = React.useState(false);

    const meinung = [
        "=(",
        "Schlimm",
        "OK",
        "Zufrieden",
        "(=",
    ]

    return (
        <div>
            <div
                style={{
                    width: 300,
                    margin: '20px auto 20px',
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
                    renderMark={({props, index}) => {
                        // console.log(props)
                        return (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: index * STEP < values[0] ? '#84BF06' : '#ccc',
                                    border: `1px solid ${index * STEP < values[0] ? '#ccc' : '#000'}`,
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
                                    background: getTrackBackground({
                                        values: values,
                                        opacity: 1,
                                        colors: ['#84BF06', '#000'],
                                        min: MIN,
                                        max: MAX,
                                        rtl
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({props, isDragged}) => {
                        return (
                            <div/>
                        )
                    }}
                />
            </div>
            <StimmeZu/>
            {
                !dragged && <div>?</div>
            }
        </div>
    )
}

export default SliderNoThumb;