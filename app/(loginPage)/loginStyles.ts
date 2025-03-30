import { Dimensions, StyleSheet,Platform } from "react-native";
import { Colors } from "../../constants/Colors";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "web" ? "30%" : screen.height / 3,
    minHeight: 100,
  },
  img: {
    width: Platform.OS === "web" ?  200 : screen.width / 2,
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
    marginVertical: 20,
  },
  text: {
    textDecorationLine: "underline",
    textAlign: "left",
    margin: 24,
  },
  buttonWrapper: {
    width: Platform.OS === "web" ?  300 : 'auto',
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
