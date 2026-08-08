import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './src/navigations/MainNavigation';
import { ThemeProvider } from './src/theme/themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
