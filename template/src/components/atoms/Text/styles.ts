import { fontSizeText, ratioW } from "@utils/UDimension";
import { StyleSheet } from "react-native";
import { KanitFonts, TKanitStyle } from "@utils/UTextStyle";

const styles = StyleSheet.create({
  container: {
    marginTop: ratioW(16),
  },
  label: {
    ...TKanitStyle.H1420Medium,
  },
  textInputContainer: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: ratioW(40),
    paddingVertical: ratioW(14),
    paddingHorizontal: ratioW(12),
  },
  errorText: {
    ...TKanitStyle.H1420Regular,
    marginTop: ratioW(4),
  },
  input: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    padding: 0,
    fontSize: fontSizeText(14),
  },
  textContainer: {
    paddingTop: 0,
    paddingBottom: 0,
    ...KanitFonts.Regular,
  },
  phoneCountry: {
    maxWidth: ratioW(68),
    flex: 1,
    borderRadius: ratioW(40),
  },
});

export default styles;
