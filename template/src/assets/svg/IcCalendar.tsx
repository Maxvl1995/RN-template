import React, {FC} from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IIconsProps {
  width?: number;
  height?: number;
  color?: string;
}
const IcCalendar: FC<IIconsProps> = ({width, height, color}) => {
  const iconsColor = color ?? '#000';
  const iconsWidth = width ?? 25;
  const iconsHeight = height ?? 25;
  return (
    <Svg
      width={iconsWidth}
      height={iconsHeight}
      stroke={iconsColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24">
      <Rect width="18" height="18" x="3" y="4" rx="2" ry="2" />

      <Path d="M16 2L16 6" />
      <Path d="M8 2L8 6" />
      <Path d="M3 10L21 10" />
    </Svg>
  );
};

export default IcCalendar;
