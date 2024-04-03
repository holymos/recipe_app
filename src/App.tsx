/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon, PlusIcon, UserIcon } from 'lucide-react-native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { ThemeProvider } from '@contexts/theme';
import { CreateRecipe } from '@screens/Create';
import { HomeScreen } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { colors } from '@theme/colors';

import styles from './App.styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Tab.Navigator
          initialRouteName="Home"
          // tabBar={(props) => <TabBar {...props} />}
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: colors.primary[500],
            tabBarInactiveTintColor: colors.neutral[300],
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="New"
            component={CreateRecipe}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <View style={styles.newRecipe}>
                  <PlusIcon size={48} color={colors.neutral[100]} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <UserIcon size={24} color={color} />,
            }}
          />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
