import {
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import styles from "./loginStyles";
import { useState, useEffect } from "react";
import CustomInput from "@/components/customInput";
import CustomButton from "@/components/customButton";
import { useRouter } from "expo-router";
import { useLogin } from "@/hooks/useLogin";
import { Colors } from "@/constants/Colors";

export default function Login() {
  const router = useRouter();
  const { isLoading, isLoggedIn, error, login } = useLogin();

  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    login({ userId, password });
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/profile/profileScreen");
    }
  }, [isLoggedIn, router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.img}
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>LOG IN</Text>
        <View style={styles.inputWrapper}>
          <CustomInput
            icon="user"
            placeholder="USER ID"
            value={userId}
            onChangeText={setUserId}
          />
          <CustomInput
            icon="lock"
            placeholder="PASSWORD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Text style={styles.text}>Forgot Password</Text>
        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Log In"
            onPress={handleLogin}
            backgroundColor="orange"
          />
        </View>
      </View>
      {isLoading && <ActivityIndicator size="large" color={Colors.orange} />}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </SafeAreaView>
  );
}
