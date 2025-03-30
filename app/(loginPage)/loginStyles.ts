import { Dimensions, StyleSheet,Platform } from "react-native";
import { Colors } from "../../constants/Colors";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: screen.height / 3,
  },
  img: {
    width: Platform.OS === "web" ?  150 : screen.width / 2,
  },
  contentWrapper: {
    justifyContent: "flex-start",
  },
  inputWrapper: {
    gap: 18,
    alignItems: "center",
  },
  title: {
    color: Colors.orange,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  text: {
    textDecorationLine: "underline",
    textAlign: "left",
    margin: 24,
  },
  buttonWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  loadig: {},
  errorMessage: {
    textAlign: "center",
    color: Colors.danger,
    fontSize: 14,
  },
});
