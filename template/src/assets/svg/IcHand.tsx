import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIconsProps {
  width?: number;
  height?: number;
  color?: string;
}
const IcHand: FC<IIconsProps> = ({width, height, color}) => {
  const iconsColor = color ?? '#000';
  const iconsWidth = width ?? 32;
  const iconsHeight = height ?? 32;
  return (
    <Svg
      viewBox="0 0 64 64"
      fill={iconsColor}
      width={iconsWidth}
      height={iconsHeight}>
      <Path d="M54.373 33.606l-.861-.86a5.267 5.267 0 00-7.44 0 1 1 0 00-.1.11l-3.293 4.428v-9.153V14.87a6.007 6.007 0 00-6-6H33.51v-.56A4.32 4.32 0 0029.19 4h-2.55a4.316 4.316 0 00-4.31 4.31v.56h-2.18a7.008 7.008 0 00-6.5 4.41h-1.67a5.386 5.386 0 00-5.38 5.38V45.561A16.458 16.458 0 0023.036 62h14.387c7.751 0 17.424-21.465 17.5-21.681 1.002-2.933 1.477-4.691-.55-6.713zm-1.328 6.021C51.319 43.774 42.7 60 37.423 60H23.036A14.456 14.456 0 018.6 45.561v-26.9a3.384 3.384 0 013.38-3.38h1.17V35.43a1 1 0 002 0V15.87a5.006 5.006 0 015-5h2.18v19.45a1 1 0 002 0V8.31A2.312 2.312 0 0126.64 6h2.55a2.318 2.318 0 012.32 2.31v22.06a.979.979 0 001 .975 1.021 1.021 0 001-1.025V10.87h3.17a4 4 0 014 4l.017 24.642c0 .55-.159 2.488.3 2.488 1 0 6.535-7.888 6.535-7.888a3.267 3.267 0 014.563.048l.861.861c1.091 1.087 1.099 1.652.089 4.606z" />
    </Svg>
  );
};

export default IcHand;
