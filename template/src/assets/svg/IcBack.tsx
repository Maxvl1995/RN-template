import React, {FC} from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface IIconsProps {
  width?: number;
  height?: number;
  color?: string;
}
const IcBack: FC<IIconsProps> = ({width, height, color}) => {
  const iconsColor = color ?? '#000';
  const iconsWidth = width ?? 20;
  const iconsHeight = height ?? 20;
  return (
    <Svg width={iconsWidth} height={iconsHeight} viewBox="0 0 16 16">
      <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <G transform="translate(-614 -3436)">
          <G transform="translate(100 3378)">
            <G transform="translate(510 54)">
              <Path d="M0 0L24 0 24 24 0 24z" />
              <Path
                fill={iconsColor}
                d="M20 11L7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13z"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default IcBack;
