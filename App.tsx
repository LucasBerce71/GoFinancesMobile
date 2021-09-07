import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Register } from './src/screens/Register';

import theme from './src/global/styles/theme';
import { CategorySelect } from './src/screens/CategorySelect';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        translucent 
        barStyle="light-content" 
        backgroundColor="transparent" 
      />
      <Register />
    </ThemeProvider>
  );
}

export default App;