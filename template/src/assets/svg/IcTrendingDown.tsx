import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIconsProps {
  width?: number;
  height?: number;
  color?: string;
}
const IcTrendingDown: FC<IIconsProps> = ({width, height, color}) => {
  const iconsColor = color ?? '#000';
  const iconsWidth = width ?? 32;
  const iconsHeight = height ?? 32;
  return (
    <Svg
      width={iconsWidth}
      height={iconsHeight}
      stroke={iconsColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24">
      <Path d="M23 18L13.5 8.5 8.5 13.5 1 6" />
      <Path d="M17 18L23 18 23 12" />
    </Svg>
  );
};

export default IcTrendingDown;
