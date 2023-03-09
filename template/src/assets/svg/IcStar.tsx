import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';
const IcStar = (props: SvgProps) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G fill="#000">
        <Path d="M16 22L7 28 11 18 2 12 12 12 16 2 20 12 30 12 21 18 25 28z" />
      </G>
    </G>
  </Svg>
);
export default IcStar;
