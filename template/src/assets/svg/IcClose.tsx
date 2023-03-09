import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IcClose = (props: SvgProps) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
      fill={props.color ?? '#9D9DA0'}
      fillOpacity={0.8}
    />
  </Svg>
);

export default IcClose;
