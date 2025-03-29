import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./detailListStyles";

interface DetailsListProps {
  data: { key: string; value: string }[];
}

const DetailsList: React.FC<DetailsListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <View style={styles.infoRow}>
          <Text style={styles.keyText}>{item.key}:</Text>
          <Text style={styles.valueText}>{item.value}</Text>
        </View>
      )}
    />
  );
};

export default DetailsList;
