import React from 'react';
import {  } from 'react-native';
import 'react-native-gesture-handler'
import Home from './src/components/Main/Home/Home'
import Browse from './src/components/Main/Browse/Browse'
import Search from './src/components/Main/Search/Search'
import Downloads from './src/components/Main/Downloads/Downloads'
import CoursesDetail from './src/components/CourseDetail/CourseDetail'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const DownloadsStack = createStackNavigator();
const BrowseStack = createStackNavigator();

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
);

const BrowseStackScreen = () => (
  <BrowseStack.Navigator>
    <BrowseStack.Screen name="Browse" component={Browse}/>
    <BrowseStack.Screen name="CoursesDetail" component={CoursesDetail}/>
  </BrowseStack.Navigator>
);

const DownloadsStackScreen = () => (
  <DownloadsStack.Navigator>
    <DownloadsStack.Screen name="Downloads" component={Downloads}/>
  </DownloadsStack.Navigator>
);

const MainTabNavigator

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home-outline'
                : 'ios-home-outline';
            } 
            else if (route.name === 'Download') {
              iconName = focused ? 'ios-arrow-down' : 'ios-arrow-down';
            }
            else if (route.name === 'Browse') {
              iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            }
            else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Downloads" component={DownloadsStackScreen} />
        <Tab.Screen name="Browse" component={BrowseStackScreen} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
