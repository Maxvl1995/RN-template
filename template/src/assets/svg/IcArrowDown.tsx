import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IcArrowDown = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M19 9L13 15L7 9"
      stroke={props.color ?? '#B3B3B3'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IcArrowDown;
