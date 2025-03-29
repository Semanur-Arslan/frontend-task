import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        justifyContent: 'space-between',
        marginBottom: 90,
        margin: 12,
    },
    content: {
        flex: 1,
        gap: 12,
        margin: 12,
    },
    wrapper: {
        borderWidth: 1,
        borderColor: Colors.orange,
        borderRadius: 8,
        padding: 12,
        backgroundColor: Colors.white,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    contentWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 10,

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
      infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
      },
      keyText: {
        fontWeight: "bold",
      },
      valueText: {
        color: "#555",
      },
      buttonWrapper: {
        alignItems: 'flex-end',
      }
    
})