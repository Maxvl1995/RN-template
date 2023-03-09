import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const IcArrowTop = (props: SvgProps) => (
  <Svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    accessibilityRole="image"
    {...props}>
    <Path
      d="M8.25 10.5L12 14.25l3.75-3.75"
      stroke={props.color ?? '#616161'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Svg>
);
export default IcArrowTop;
