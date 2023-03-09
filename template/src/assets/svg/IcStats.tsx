import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';
const IcStats = (props: SvgProps) => (
  <Svg width="21" height="20" viewBox="0 0 21 20" {...props}>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G fill="#000" transform="translate(-59 -840)">
        <G transform="translate(56 160)">
          <Path d="M12.45 698h2.1v-16h-2.1v16zm-2.1 2h6.3v-20h-6.3v20zm-5.25-2h2.1v-12H5.1v12zM3 700h6.3v-16H3v16zm16.8-2h2.1v-6h-2.1v6zm-2.1 2H24v-10h-6.3v10z" />
        </G>
      </G>
    </G>
  </Svg>
);
export default IcStats;
