import { useTheme } from "@theme/index";
import { dSizeWidth } from "@utils/UDimension";
import React from "react";
import { Dimensions, StyleSheet, Text, TextProps } from "react-native";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
const realWidth = height > width ? width : height;

export const scaleText = (
  fontSize = 14,
  lineHeight: number = fontSize * 1.2
) => ({
  fontSize: Math.round((fontSize * realWidth) / dSizeWidth),
  lineHeight: Math.round((lineHeight * realWidth) / dSizeWidth),
});

interface NewTextProps extends TextProps {
  children?: React.ReactNode;
}

const ScalableText = (props: NewTextProps) => {
  const { fontSize, lineHeight } = StyleSheet.flatten(props.style ?? {});
  const { colors } = useTheme();
  const dStyle = StyleSheet.flatten([
    styles.textContainer,
    { color: colors.defaultText },
    props.style,
    scaleText(fontSize, lineHeight),
  ]);
  return (
    <Text allowFontScaling={false} {...props} style={dStyle}>
      {props.children}
    </Text>
  );
};

export default React.memo(ScalableText);
