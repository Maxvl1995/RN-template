import { Text } from "@components/atoms";
import { useTheme } from "@theme/index";
import mAnimated from "@utils/methods/mAnimated";
import { ratioW } from "@utils/UDimension";
import { TKanitStyle } from "@utils/UTextStyle";
import React, { FC, useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import IcArrowTop from "src/assets/svg/IcArrowTop";
import { ICardStack } from "./interface";

const CardStack: FC<ICardStack> = ({
  title,
  disabled,
  style,
  textStyle,
  iconProps,
  contentProps,
  heightProps,
}) => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const animatedRef = useRef<Animated.Value>(new Animated.Value(0));

  const onTiming = () => {
    if (isVisible) {
      mAnimated.changeAnimated({
        toValue: heightProps ?? 400,
        value: animatedRef.current,
        duration: 500,
      });
    } else {
      mAnimated.changeAnimated({
        toValue: 0,
        value: animatedRef.current,
        duration: 400,
      });
    }
  };

  useEffect(() => {
    onTiming();
  }, [isVisible]);

  const onSelect = () => {
    setIsVisible(!isVisible);
  };

  const dStyleHeader: ViewStyle = {
    ...styles.default,
    backgroundColor: colors.backgroundColor,
    borderTopLeftRadius: ratioW(8),
    borderTopRightRadius: ratioW(8),
    borderBottomLeftRadius: ratioW(8),
    borderBottomRightRadius: ratioW(8),
  };
  const dStyleContainer: ViewStyle = {
    ...styles.vContainer,
    borderColor: colors.headerBorder,
    backgroundColor: colors.backgroundColor,
  };
  const renderIconLeftHeader = () => {
    if (iconProps) {
      return <View style={styles.vIconRight}>{iconProps}</View>;
    }
  };
  return (
    <View style={dStyleContainer}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onSelect}
        activeOpacity={0.8}
        style={[dStyleHeader, style]}
      >
        <View style={styles.vLeftHeader}>
          {renderIconLeftHeader()}
          <Text
            style={[
              styles.defaultText,
              textStyle,
              { color: disabled ? colors.disabledButton : colors.defaultText },
            ]}
          >
            {title}
          </Text>
        </View>
        <IcArrowTop
          style={{
            transform: isVisible
              ? [{ rotate: "180deg" }]
              : [{ rotate: "0deg" }],
          }}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.scroll,
          { height: animatedRef.current, backgroundColor: colors.bgHeader },
        ]}
      >
        {isVisible && contentProps}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  vContainer: {
    borderWidth: 1,
    borderRadius: ratioW(8),
    marginTop: ratioW(10),
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
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: ratioW(12),
  },
  defaultText: {
    ...TKanitStyle.H1624Medium,
  },
  flex1: {
    flex: 1,
  },
  scroll: {
    borderBottomLeftRadius: ratioW(8),
    borderBottomRightRadius: ratioW(8),
  },
  txtEmpty: {
    textAlign: "center",
    ...TKanitStyle.H1420Regular,
  },
  txtEmptyChild: {
    textAlign: "center",
    ...TKanitStyle.H1216Regular,
  },
  vLeftHeader: { flexDirection: "row" },
  vIconRight: { marginRight: ratioW(10) },
});

export default CardStack;
