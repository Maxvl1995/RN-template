import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IcArrowLeft = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    accessibilityRole="image"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9097 4.27846C10.5112 3.89608 9.87813 3.90913 9.49575 4.30763L2.77867 11.3076C2.40739 11.6945 2.40739 12.3055 2.77867 12.6924L9.49575 19.6924C9.87813 20.0909 10.5112 20.1039 10.9097 19.7215C11.3082 19.3392 11.3212 18.7061 10.9388 18.3076L4.88614 12L10.9388 5.69238C11.3212 5.29388 11.3082 4.66085 10.9097 4.27846Z"
      fill={props.color ?? 'black'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.76709 12.0317C3.76709 12.584 4.21481 13.0317 4.76709 13.0317L20.5001 13.0317C21.0524 13.0317 21.5001 12.584 21.5001 12.0317C21.5001 11.4795 21.0524 11.0317 20.5001 11.0317L4.76709 11.0317C4.21481 11.0317 3.76709 11.4795 3.76709 12.0317Z"
      fill={props.color ?? 'black'}
    />
  </Svg>
);
export default IcArrowLeft;
