import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcMenuGrepo = (props: SvgProps) => (
    <Svg
        width={22}
        height={22}
        fill="#000"
        viewBox="0 0 512 512"
    >
        <Path d="M0 73.143H219.429V219.429H0z"></Path>
        <Path d="M292.571 73.143H512V219.429H292.571z"></Path>
        <Path d="M0 292.571H219.429V438.857H0z"></Path>
        <Path d="M292.571 292.571H512V438.857H292.571z"></Path>
    </Svg>
);

export default IcMenuGrepo;
