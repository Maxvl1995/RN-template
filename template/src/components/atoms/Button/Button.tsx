import { useTheme } from "@theme/index";
import { ratioW } from "@utils/UDimension";
import { TKanitStyle } from "@utils/UTextStyle";
import React from "react";
import {
  ColorValue,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import Text from "../Text/Text";

export type TButton =
  | "primary"
  | "info"
  | "danger"
  | "warning"
  | "success"
  | "bordered";

export interface IButtonProps extends TouchableOpacityProps {
  buttonType?: TButton;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: () => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  mainColor?: ColorValue;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    buttonType = "primary",
    style,
    textStyle,
    title,
    onPress,
    leftIcon,
    rightIcon,
    mainColor,
  } = props;
  const { colors } = useTheme();

  const getColor = (): ColorValue => {
    if (props.disabled) {
      return colors.disabledButton;
    }
    switch (buttonType) {
      case "primary":
        return mainColor ?? colors.primaryColor;
      case "info":
        return mainColor ?? colors.infoColor;
      case "danger":
        return mainColor ?? colors.dangerColor;
      case "warning":
        return mainColor ?? colors.warningColor;
      case "success":
        return mainColor ?? colors.successColor;
      default:
        return mainColor ?? colors.primaryColor;
    }
  };
  const dText = StyleSheet.flatten([
    styles.defaultText,
    { color: colors.buttonText },
    textStyle,
  ]);
  if (buttonType === "bordered") {
    const dStyle: StyleProp<ViewStyle> = {
      ...styles.default,
      ...styles.bordered,
      borderColor: getColor(),
      backgroundColor: colors.backgroundColor,
    };
    const dBorderedText = StyleSheet.flatten([
      styles.defaultText,
      { color: getColor() },
      textStyle,
    ]);
    return (
      <TouchableOpacity
        {...props}
        onPress={onPress}
        activeOpacity={0.8}
        style={[dStyle, style]}
      >
        {leftIcon}
        <Text style={dBorderedText}>{title}</Text>
        {rightIcon}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      activeOpacity={0.8}
      style={[{ backgroundColor: getColor() }, styles.default, style]}
    >
      {leftIcon}
      <Text style={dText}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  bordered: {
    borderWidth: 1,
  },
  default: {
    flexDirection: "row",
    borderRadius: ratioW(40),
    paddingVertical: ratioW(12),
    paddingHorizontal: ratioW(10),
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: ratioW(4),
        shadowOffset: { height: ratioW(4), width: ratioW(4) },
      },
      android: { elevation: 5 },
    }),
  },
  defaultText: {
    ...TKanitStyle.H1624Medium,
  },
});
