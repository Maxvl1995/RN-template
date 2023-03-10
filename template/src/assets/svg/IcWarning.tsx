import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';
const IcWarning = (props: SvgProps) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G fill="#000">
        <Path d="M14.308 6.054c.87-1.407 2.283-1.404 3.15 0l10.786 17.45c1.161 1.879.315 3.402-1.889 3.402H5.411c-2.204 0-3.054-1.517-1.888-3.403L14.308 6.054zm1.576 5.852c-.553 0-1 .453-1 .997v6.006c0 .55.443.997 1 .997.552 0 1-.453 1-.997v-6.006a.996.996 0 00-1-.997zm0 12a1 1 0 100-2 1 1 0 000 2z" />
      </G>
    </G>
  </Svg>
);
export default IcWarning;
