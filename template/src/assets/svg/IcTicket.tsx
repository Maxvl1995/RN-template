import * as React from 'react';
import Svg, {G, Path, Rect, SvgProps} from 'react-native-svg';

const IcTicket = (props: SvgProps) => (
  <Svg viewBox="0 0 296 113" width={296} height={113} {...props}>
    <G>
      <Path
        d="M4 16C4 7.16344 11.1634 0 20 0H66V113H20C11.1634 113 4 105.837 4 97V16Z"
        fill="#FFB237"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.4931 2.94568C68.9511 1.38001 67.6569 0 66 0V10H90V0C88.3431 0 87.0489 1.38001 86.5069 2.94568C85.2868 6.4696 81.9389 9 78 9C74.0611 9 70.7132 6.4696 69.4931 2.94568Z"
        fill="#FFB237"
      />
      <Rect x={66} y={10} width={10} height={93} fill="#FFB237" />
      <Path
        d="M78 103V10"
        stroke="#FFB237"
        strokeWidth={4}
        strokeDasharray="4 4"
      />
      <Rect x={80} y={10} width={10} height={93} fill="#FFB237" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.4931 110.054C68.9511 111.62 67.6569 113 66 113V103H90V113C88.3431 113 87.0489 111.62 86.5069 110.054C85.2868 106.53 81.9389 104 78 104C74.0611 104 70.7132 106.53 69.4931 110.054Z"
        fill="#FFB237"
      />
      <Path
        d="M90 0H276C284.837 0 292 7.16344 292 16V97C292 105.837 284.837 113 276 113H90V0Z"
        fill="#FFB237"
      />
    </G>
  </Svg>
);
export default IcTicket;
