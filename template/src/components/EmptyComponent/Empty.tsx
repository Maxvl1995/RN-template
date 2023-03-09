import IcEmpty from "@ts/svg/IcEmpty";
import React from "react";
import { FlexView } from "@components/organism";
import { ratioW, screenHeight } from "@utils/UDimension";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import i18n from "@i18n";
import Text from "../atoms/Text/Text";
import { TKanitStyle } from "@utils/UTextStyle";

interface IEmptyProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const Empty: React.FC<IEmptyProps> = ({ title, style }) => {
  return (
    <FlexView style={[styles.vContainer, style]}>
      <IcEmpty />
      <Text style={styles.txtContent}>{title ?? i18n.t("common.NoData")}</Text>
    </FlexView>
  );
};

export default React.memo(Empty);

const styles = StyleSheet.create({
  vContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    minHeight: screenHeight * 0.3,
  },
  txtContent: {
    textAlign: "center",
    marginTop: ratioW(20),
    ...TKanitStyle.H1624Medium,
  },
});
