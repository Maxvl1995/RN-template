import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcSend = (props: SvgProps) => (
    <Svg width={23} 
        height={23}
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        viewBox="0 0 24 24" {...props}>
        <Path
            d="M21.368 12.001L3 21.609 3 14 11 12 3 9.794 3 2.394z"
        />
    </Svg>
);

export default IcSend;
