import { ratioW } from "@utils/UDimension";
import { TKanitStyle } from "@utils/UTextStyle";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  wrapper: {
    width: "80%",
    borderRadius: ratioW(35),
  },
  textInput: {
    marginHorizontal: ratioW(15),
    padding: ratioW(15),
    borderRadius: ratioW(40),
  },
  title: {
    ...TKanitStyle.H2436Bold,
    textAlign: "center",
  },
  btLogin: {
    marginHorizontal: ratioW(15),
  },
});
