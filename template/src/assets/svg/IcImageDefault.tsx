import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';
const IcImageDefault = (props: SvgProps) => (
  <Svg width="20" height="16" viewBox="0 0 20 16" {...props}>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G fill="#000" transform="translate(-340 -3881)">
        <G transform="translate(56 160)">
          <Path d="M296 3725.5a1 1 0 112 0 1 1 0 01-2 0zm.75 3.25L300 3733h-12l4.518-6.188 2.836 3.813 1.396-1.875zM302 3734a1 1 0 01-1 1h-14a1 1 0 01-1-1v-10a1 1 0 011-1h14a1 1 0 011 1v10zm0-13h-16a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2v-12a2 2 0 00-2-2z" />
        </G>
      </G>
    </G>
  </Svg>
);
export default IcImageDefault;
