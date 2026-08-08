import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LightTheme, DarkTheme } from './colors';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('theme');
      if (value !== null) {
        setDark(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTheme = async () => {
    try {
      const newValue = !dark;
      setDark(newValue);
      await AsyncStorage.setItem('theme', JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  };

  const theme = dark ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
