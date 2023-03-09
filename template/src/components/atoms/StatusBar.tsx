import { useTheme } from "@theme/index";
import React, { memo } from "react";
import { StatusBar as StatusBarRN } from "react-native";

const supportedStyles = {
  "light-content": "light-content",
  "dark-content": "dark-content",
};

interface IStatusBar {
  barStyle?: keyof typeof supportedStyles;
  backgroundColor?: string;
}

const StatusBar = React.memo(({ barStyle }: IStatusBar) => {
  const { theme } = useTheme();
  if (!barStyle) {
    barStyle = "light-content";
    if (theme === "light") {
      barStyle = "dark-content";
    }
  }
  return (
    <StatusBarRN
      barStyle={barStyle}
      animated
      backgroundColor={"transparent"}
      translucent={true}
    />
  );
});

export default memo(StatusBar);

StatusBar.displayName = "StatusBar";
