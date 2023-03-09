import * as React from 'react';
import Svg, { Path, SvgProps, Rect } from 'react-native-svg';

const IcDetail = (props: SvgProps) => (
    <Svg
        width={20}
        height={20}
        fill="#000"
        viewBox="0 0 24 24"
        {...props}>
         <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 5h10M11 9h5"
      ></Path>
      <Rect
        width="4"
        height="4"
        x="3"
        y="5"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        rx="1"
      ></Rect>
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 15h10m-10 4h5"
      ></Path>
      <Rect
        width="4"
        height="4"
        x="3"
        y="15"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        rx="1"
      ></Rect>
    </Svg>
);

export default IcDetail;
