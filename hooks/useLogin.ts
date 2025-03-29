import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

interface LoginData {
  userId: string;
  password: string;
}

export function useLogin() {

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const API_URL = `${process.env.EXPO_PUBLIC_API_URL}`;

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('AsyncStorage error: ', error);
      }
    };
    checkLoggedIn();
  }, []);

  const login = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(API_URL, data);

      if (response.data.status) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setIsLoggedIn(true);
      } else {
        setError('Giriş başarısız! Kullanıcı adı veya şifre hatalı.');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setIsLoggedIn(false);
        router.push("/(loginPage)/login");
  };

  return { isLoading, isLoggedIn, error, login, logout };
}
