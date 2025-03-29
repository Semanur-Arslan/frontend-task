import { Stack } from "expo-router";
import CustomTabBar from "@/components/customTabBar";

export default function ScreenLayout() {
  return (
    <>
      <CustomTabBar />

      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "transparent" },
          animation: "none",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="profileScreen/index"
          options={{ title: "Profile" }}
        />
        <Stack.Screen name="users" options={{ title: "User" }} />
        <Stack.Screen name="products" options={{ title: "Products" }} />
      </Stack>
    </>
  );
}
