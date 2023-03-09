import mAnimated from "@utils/methods/mAnimated";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ratioW, screenWidth } from "@utils/UDimension";
import { RowContainer } from "@components/organism";
import { TKanitStyle } from "@utils/UTextStyle";
import { useTheme } from "@theme/index";

export interface IAnimatedTabRoute {
  key: string;
  title: string;
}

export type TButtonAny<T> = (value: T) => void;

export interface IAnimatedTabProps {
  routes: IAnimatedTabRoute[];
  onChangeIndex: TButtonAny<number>;
  index: number;
}

const AnimatedTab: React.FC<IAnimatedTabProps> = ({
  routes,
  onChangeIndex,
  index,
}) => {
  const { colors } = useTheme();
  const animatedRef = useRef(new Animated.Value(index));

  useEffect(() => {
    mAnimated.changeAnimated({ value: animatedRef.current, toValue: index });
  }, [index]);

  const translateX = animatedRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screenWidth * 0.3],
    extrapolate: "clamp",
  });

  return (
    <RowContainer
      style={{
        ...styles.container,
        backgroundColor: colors.inactiveTab,
      }}
    >
      <Animated.View
        style={{
          ...styles.animated,
          backgroundColor: colors.activeTab,
          transform: [{ translateX }],
        }}
      />
      {routes.map((item, i) => {
        const onChangeTab = () => onChangeIndex(i);
        const sText = StyleSheet.flatten([
          styles.itemText,
          { color: index === i ? colors.backgroundColor : colors.activeTab },
        ]);
        return (
          <TouchableOpacity
            key={i}
            onPress={onChangeTab}
            style={styles.itemButton}
          >
            <Text style={sText}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </RowContainer>
  );
};

export default React.memo(AnimatedTab);

const styles = StyleSheet.create({
  animated: {
    height: "100%",
    position: "absolute",
    borderRadius: ratioW(24),
    width: screenWidth * 0.3,
  },
  container: {
    overflow: "hidden",
    alignSelf: "center",
    borderRadius: ratioW(24),
  },
  itemButton: {
    paddingHorizontal: ratioW(12),
    paddingVertical: ratioW(8),
    width: screenWidth * 0.3,
    justifyContent: "center",
  },
  itemText: {
    textAlign: "center",
    textAlignVertical: "center",
    ...TKanitStyle.H1624Medium,
  },
});
