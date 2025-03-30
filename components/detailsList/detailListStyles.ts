import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
      infoRow: {
        flexDirection: "row",
        flexWrap: "wrap", 
        justifyContent: "space-between",
        marginBottom: 4,
      },
      keyText: {
        fontWeight: "bold",
      },
      valueText: {
        color: Colors.icon,
      },

    
})