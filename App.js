import React from 'react';
import {  } from 'react-native';
import 'react-native-gesture-handler'
import Home from './src/components/Main/Home/Home'
import Browse from './src/components/Main/Browse/Browse'
import Search from './src/components/Main/Search/Search'
import Downloads from './src/components/Main/Downloads/Downloads'
import CoursesDetail from './src/components/CourseDetail/CourseDetail'
import SplashScreen from './src/components/SplashScreen/splash-screen'
import Login from './src/components/Authentication/Login/Login'
import {ScreenKey} from './src/globals/constants'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();
const DownloadsStack = createStackNavigator();
const BrowseStack = createStackNavigator();

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
    <HomeStack.Screen name="CoursesDetail" component={CoursesDetail}/>
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


const MainTabNavigator = () =>(
  <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      style={{ backgroundColor: 'white' }}
    >
    <Tab.Screen 
      name="Home" 
      component={HomeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Downloads" 
      component={DownloadsStackScreen}
      options={{
        tabBarLabel: 'Downloads',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="arrow-collapse-down" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Browse" 
      component={BrowseStackScreen} 
      options={{
        tabBarLabel: 'Browse',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="grid" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Search" 
      component={Search} 
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
    
)

const MainStackNavigation =() => (
  <MainStack.Navigator>
    <MainStack.Screen
      name = {ScreenKey.SplashScreen}
      component = {SplashScreen}
      options = {{headerShown: false}}
    />
    <MainStack.Screen
      name = {ScreenKey.LoginScreen}
      component = {Login}
      options = {{headerShown: false}}
    />
    <MainStack.Screen
      name = {ScreenKey.MainTabScreen}
      component = {MainTabNavigator}
      options = {{headerShown: false}}
    />
  </MainStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation/>
    </NavigationContainer>
  );
}
