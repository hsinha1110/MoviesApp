import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ArrowDownTrayIcon,
  Cog6ToothIcon,
} from 'react-native-heroicons/outline';

import {
  HomeIcon as HomeSolid,
  MagnifyingGlassIcon as MagnifyingGlassSolid,
  HeartIcon as HeartSolid,
  ArrowDownTrayIcon as ArrowDownTraySolid,
  Cog6ToothIcon as Cog6ToothSolid,
} from 'react-native-heroicons/solid';

import * as Screens from '../screens';
import Routes from './Routes';
import { useTheme } from '../theme/useTheme';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.subText,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name={Routes.HOME}
        component={Screens.Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSolid size={24} color={theme.primary} />
            ) : (
              <HomeIcon size={24} color={theme.subText} />
            ),
        }}
      />

      {/* Search */}
      <Tab.Screen
        name={Routes.SEARCH}
        component={Screens.Search}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MagnifyingGlassSolid size={24} color={theme.primary} />
            ) : (
              <MagnifyingGlassIcon size={24} color={theme.subText} />
            ),
        }}
      />

      {/* Favourites */}
      <Tab.Screen
        name={Routes.FAVOURITES}
        component={Screens.Favourites}
        options={{
          title: 'Favourites',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HeartSolid size={24} color={theme.primary} />
            ) : (
              <HeartIcon size={24} color={theme.subText} />
            ),
        }}
      />

      {/* Downloads */}
      <Tab.Screen
        name={Routes.DOWNLOADS}
        component={Screens.Downloads}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ArrowDownTraySolid size={24} color={theme.primary} />
            ) : (
              <ArrowDownTrayIcon size={24} color={theme.subText} />
            ),
        }}
      />

      {/* Settings */}
      <Tab.Screen
        name={Routes.SETTINGS}
        component={Screens.Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Cog6ToothSolid size={24} color={theme.primary} />
            ) : (
              <Cog6ToothIcon size={24} color={theme.subText} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
