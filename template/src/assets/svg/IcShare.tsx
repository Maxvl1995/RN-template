import * as React from 'react';
import Svg, { Path, SvgProps, Circle } from 'react-native-svg';

const IcShare = (props: SvgProps) => (
    <Svg width={25}
        height={25}
        stroke="#000"
        viewBox="0 0 24 24" {...props}>
        <Circle
            cx="5"
            cy="12"
            r="3"
            fill="#059cf7"
            stroke="none"
            opacity="0.1"
        ></Circle>
        <Circle cx="5" cy="12" r="3"></Circle>
        <Circle
            cx="19"
            cy="19"
            r="3"
            fill="#059cf7"
            stroke="none"
            opacity="0.1"
        ></Circle>
        <Circle cx="19" cy="19" r="3"></Circle>
        <Circle
            cx="19"
            cy="5"
            r="3"
            fill="#059cf7"
            stroke="none"
            opacity="0.1"
        ></Circle>
        <Circle cx="19" cy="5" r="3"></Circle>
        <Path d="M7.6 13.5L16.15 18"></Path>
        <Path d="M16.4 6.5L7.85 11"></Path>
    </Svg>
);

export default IcShare;
