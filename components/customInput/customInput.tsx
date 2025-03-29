import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./customInputStyles";

interface CustomInputProps extends TextInputProps {
  icon: keyof typeof FontAwesome.glyphMap;
}

const CustomInput: React.FC<CustomInputProps> = ({ icon, ...props }) => {
  return (
    <View style={styles.inputWrapper}>
      <FontAwesome name={icon} size={20} color="#888" style={styles.icon} />
      <TextInput style={styles.input} {...props} autoCapitalize="none" />
    </View>
  );
};

export default CustomInput;
