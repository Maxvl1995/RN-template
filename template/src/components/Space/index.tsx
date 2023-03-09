import { ratioW } from "@utils/UDimension";
import React, { FC } from "react";
import { View, ViewStyle } from "react-native";

interface ISpaceProps {
  height?: number;
  width?: number;
  style?: ViewStyle;
}
const Space: FC<ISpaceProps> = ({ style, height, width }) => {
  const defaultWidth = "100%";
  const defaultHeight = ratioW(10);

  return (
    <View
      style={[
        { width: width ?? defaultWidth, height: height ?? defaultHeight },
        style,
      ]}
    />
  );
};

export default Space;
