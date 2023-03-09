import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcTwoArrows = (props: SvgProps) => (
    <Svg
        width={20}
        height={20}
        fill="#000"
        viewBox="0 0 256 256"
        {...props}>
        <Path
            stroke={props.color ?? '#616161'}
            d="M119.39 172.938a8 8 0 01-1.733 8.72l-32 32a8.002 8.002 0 01-11.314 0l-32-32A8 8 0 0148 168h24V48a8 8 0 0116 0v120h24a8 8 0 017.39 4.938zm94.267-98.595l-32-32a8.001 8.001 0 00-11.314 0l-32 32A8 8 0 00144 88h24v120a8 8 0 0016 0V88h24a8 8 0 005.657-13.657z"/>
    </Svg>
);

export default IcTwoArrows;
