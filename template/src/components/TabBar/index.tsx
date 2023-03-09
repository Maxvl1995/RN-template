import { useTheme } from "@theme/index";
import { TKanitStyle } from "@utils/UTextStyle";
import React, { FC } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { Route } from "react-native-tab-view";
import { IPropsTabBar } from "./interface";

const TabBar: FC<IPropsTabBar> = ({ TabBarProps, onSetIndex }) => {
  const inputRange = TabBarProps.navigationState.routes.map((x, i) => i);
  const { colors } = useTheme();

  return (
    <View style={[styles.tabBar, { backgroundColor: colors.inactiveTab }]}>
      {TabBarProps.navigationState.routes.map((route: Route, i: number) => {
        const opacity = TabBarProps.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5
          ),
        });

        return (
          <TouchableOpacity
            key={i}
            style={[styles.tabItem]}
            onPress={() => onSetIndex(i)}
          >
            <Animated.Text
              style={[styles.title, { color: colors.faqTitle }, { opacity }]}
            >
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  title: {
    ...TKanitStyle.H1624Medium,
  },
});
