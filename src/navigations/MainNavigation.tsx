import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from '../screens';
import BottomNavigation from './BottomNavigation';
import Routes from './Routes';
import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MAIN_TABS}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Bottom Tabs */}
      <Stack.Screen name={Routes.MAIN_TABS} component={BottomNavigation} />

      {/* Movie Details */}
      <Stack.Screen
        name={Routes.MOVIE_DETAILS}
        component={Screens.MovieDetails}
      />

      {/* Trailer */}
      <Stack.Screen name={Routes.TRAILER} component={Screens.Trailer} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
