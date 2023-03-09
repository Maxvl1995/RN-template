import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IcRight = (props: SvgProps) => (
  <Svg width={7} height={12} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.594.926a.889.889 0 0 1 1.257 0l4.444 4.445a.889.889 0 0 1 0 1.257l-4.444 4.444A.889.889 0 1 1 .594 9.815L4.41 6 .594 2.183a.889.889 0 0 1 0-1.257Z"
      fill={props.color ?? 'black'}
    />
  </Svg>
);

export default IcRight;
