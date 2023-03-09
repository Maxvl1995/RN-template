import { ratioW, screenHeight } from "@utils/UDimension";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    justifyContent: "flex-end",
  },
  crossbarContainer: {
    borderRadius: ratioW(8),
    marginBottom: ratioW(9),
    alignSelf: "center",
    width: ratioW(62),
    height: ratioW(6),
  },
  container: {
    borderTopEndRadius: ratioW(24),
    borderTopStartRadius: ratioW(24),
    minHeight: screenHeight / 1.5,
    paddingHorizontal: ratioW(22),
    paddingTop: ratioW(32),
    overflow: "hidden",
    width: "100%",
    bottom: 0,
  },
});

export default styles;
