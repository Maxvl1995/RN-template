import { useTheme } from "@theme/index";
import { ratioW } from "@utils/UDimension";
import React from "react";
import { Animated, ScrollViewProps, StyleSheet } from "react-native";

const ScrollView: React.FC<ScrollViewProps> = (props) => {
  const { colors } = useTheme();
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      {...props}
      contentContainerStyle={[
        styles.scrollContent,
        props.contentContainerStyle,
      ]}
      style={[{ backgroundColor: colors.backgroundColor }, props.style]}
    >
      {props.children}
    </Animated.ScrollView>
  );
};

export default ScrollView;

const styles = StyleSheet.create({
  scrollContent: {
    padding: ratioW(16),
    paddingBottom: ratioW(32),
  },
});
