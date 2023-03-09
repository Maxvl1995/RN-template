import * as React from 'react';
import Svg, { Path, SvgProps, G } from 'react-native-svg';

const IcThreeDot = (props: SvgProps) => (
    <Svg width={25} height={25}
        viewBox="0 -6 16 16">
        <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <G fill="#000" fillRule="nonzero" transform="translate(-1119 -756)">
                <G>
                    <Path
                        d="M6 10a2 2 0 100 4 2 2 0 000-4zM12 10a2 2 0 100 4 2 2 0 000-4zM18 10a2 2 0 100 4 2 2 0 000-4z"
                        transform="translate(1115 746)"
                    ></Path>
                </G>
            </G>
        </G>
    </Svg>
);

export default IcThreeDot;
