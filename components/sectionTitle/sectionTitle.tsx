import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./sectionTitleStyles";

interface SectionTitleProps {
  title: string;
  editable?: boolean;
  onEdit?: () => void;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  editable = false,
  onEdit,
}) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      {editable && (
        <TouchableOpacity onPress={onEdit} style={styles.editIcon}>
          <MaterialIcons name="edit" size={18} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionTitle;
