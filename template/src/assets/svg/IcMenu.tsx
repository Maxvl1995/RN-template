import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IcMenu = (props: SvgProps) => (
  <Svg width={20} height={20} fill="#000" viewBox="0 0 17 17" {...props}>
    <Path
      stroke={props.color ?? '#616161'}
      d="M16 2v2H5V2h11zM5 9h11V7H5v2zm0 5h11v-2H5v2zM2 2a1 1 0 100 2 1 1 0 000-2zm0 5a1 1 0 100 2 1 1 0 000-2zm0 5a1 1 0 100 2 1 1 0 000-2z"
    />
  </Svg>
);

export default IcMenu;
