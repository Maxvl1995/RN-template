import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcView = (props: SvgProps) => (
    <Svg width={25} height={25} fill="none"viewBox="0 0 1024 1024" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 110 448 224 224 0 010-448zm0 64a160.192 160.192 0 00-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
            fill={props.color ?? 'black'}
        />
    </Svg>
);

export default IcView;
