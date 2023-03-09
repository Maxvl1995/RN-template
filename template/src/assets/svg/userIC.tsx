import React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

function UserIc(props: SvgProps) {
  return (
    <Svg data-name="Layer 1" viewBox="0 0 24 24" {...props}>
      <Path d="M15 14H9a7 7 0 00-7 7 1 1 0 001 1h18a1 1 0 001-1 7 7 0 00-7-7z" />
      <Circle cx={12} cy={7.5} r={5.5} />
    </Svg>
  );
}

export default UserIc;
