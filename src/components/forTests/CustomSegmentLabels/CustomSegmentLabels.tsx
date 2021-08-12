import ReactSpeedometer from "../react-d3-speedometer-master/src";
import React from "react";

export const CustomSegmentLabels = (props) => (
    <div>
        <div>
            <ReactSpeedometer
                onMouseEnter={() => console.log('d')}
                onMouseLeave={() => console.log('d')}
                // width={500}
                needleHeightRatio={0.7}
                value={props.completed}
                currentValueText="?"
                customSegmentStops={[0, 1000]}
                // segmentColors={['red', 'green']}
                segmentColors={['black']}
                customSegmentLabels={[
                    {
                        text: '',
                        position: 'INSIDE',
                        color: '#000',
                    },
                ]}
                // customSegmentLabels={[
                //     {
                //         text: 'Stimme auf keinen Fall zu',
                //         position: 'INSIDE',
                //         color: '#fff',
                //     },
                //     {
                //         text: 'Absolut einverstanden',
                //         position: 'INSIDE',
                //         color: '#000',
                //     },
                // ]}
                ringWidth={10}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={'#84BF06'}
                textColor={'#84BF06'}
            />
        </div>
    </div>
)