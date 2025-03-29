import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./customTabBarStyles";
import { useState, useEffect } from "react";
import tabs from "@/constants/profileTabs";

export default function CustomTabBar() {
  const router = useRouter();
  const segments = useSegments();
  const [currentPage, setCurrentPage] = useState<string>("profileScreen");

  useEffect(() => {
    if (!segments.length) {
      setCurrentPage("profileScreen");
    } else {
      setCurrentPage(segments[segments.length - 1] as string);
    }
  }, [segments]);

  return (
    <SafeAreaView style={styles.tabBar}>
      {tabs.map((tab) => {
        const isActive = currentPage === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabButton}
            onPress={() => router.push(tab.path)}
          >
            <View style={styles.tabItem}>
              <MaterialIcons
                name={tab.icon as any}
                size={24}
                style={[styles.tabText, isActive && styles.activeTab]}
              />
              <Text style={[styles.tabText, isActive && styles.activeTab]}>
                {tab.label}
              </Text>
            </View>
            <View
              style={[
                styles.underline,
                isActive && { backgroundColor: "orange" },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}
