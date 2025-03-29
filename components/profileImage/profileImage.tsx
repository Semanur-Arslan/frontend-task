import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./profileImageStyles";

const ProfileImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageWrapper}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </View>
      <TouchableOpacity onPress={pickImage} style={styles.editIcon}>
        <MaterialIcons name="edit" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImage;
