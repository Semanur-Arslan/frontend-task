import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
      imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      },
      imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        backgroundColor: "#D3D3D3", 
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },
      image: {
        width: "100%",
        height: "100%",
        borderRadius: 50, 
      },
      editIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: Colors.orange, 
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    
})