import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
