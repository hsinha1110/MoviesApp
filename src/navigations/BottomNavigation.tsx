import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ArrowDownTrayIcon,
} from 'react-native-heroicons/outline';

import {
  HomeIcon as HomeSolid,
  MagnifyingGlassIcon as MagnifyingGlassSolid,
  HeartIcon as HeartSolid,
  ArrowDownTrayIcon as ArrowDownTraySolid,
} from 'react-native-heroicons/solid';
import * as Screens from '../screens';
import Routes from './Routes';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E5E5',
          borderTopWidth: 1,
        },

        tabBarActiveTintColor: '#E50914',
        tabBarInactiveTintColor: '#8E8E93',

        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Screens.Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? (
              <HomeSolid size={24} color="#E50914" />
            ) : (
              <HomeIcon size={24} color="#8E8E93" />
            ),
        }}
      />

      <Tab.Screen
        name={Routes.SEARCH}
        component={Screens.Search}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? (
              <MagnifyingGlassSolid size={24} color="#E50914" />
            ) : (
              <MagnifyingGlassIcon size={24} color="#8E8E93" />
            ),
        }}
      />

      <Tab.Screen
        name={Routes.FAVOURITES}
        component={Screens.Favourites}
        options={{
          title: 'Favourites',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? (
              <HeartSolid size={24} color="#E50914" />
            ) : (
              <HeartIcon size={24} color="#8E8E93" />
            ),
        }}
      />

      <Tab.Screen
        name={Routes.DOWNLOADS}
        component={Screens.Downloads}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? (
              <ArrowDownTraySolid size={24} color="#E50914" />
            ) : (
              <ArrowDownTrayIcon size={24} color="#8E8E93" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
