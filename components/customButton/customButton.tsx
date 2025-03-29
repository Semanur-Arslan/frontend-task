import React from "react";
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "./customButtonStyles";
import { Colors } from "../../constants/Colors";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: keyof typeof Colors;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: Colors[backgroundColor] }]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color="white"
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
