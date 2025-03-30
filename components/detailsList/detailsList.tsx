import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./detailListStyles";

interface DetailsListProps {
  data: { key: string; value: string }[];
}

const DetailsList: React.FC<DetailsListProps> = ({ data }) => {
  return (
    <ScrollView>
      {data.map((item) => (
        <View style={styles.infoRow} key={item.key}>
          <Text style={styles.keyText}>{item.key}:</Text>
          <Text style={styles.valueText}>{item.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DetailsList;
