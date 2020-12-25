import React from 'react';
import {  } from 'react-native';
import 'react-native-gesture-handler'
import Home from './src/components/Main/Home/Home'
import Browse from './src/components/Main/Browse/Browse'
import Search from './src/components/Main/Search/Search'
import Downloads from './src/components/Main/Downloads/Downloads'
import CourseDetail from './src/components/Common/CourseDetail/CourseDetail'
import SplashScreen from './src/components/SplashScreen/splash-screen'
import Login from './src/components/Authentication/Login/Login'
import Register from './src/components/Authentication/Register/Register'
import Profile from './src/components/AccountManagement/Profile'
import {ScreenKey} from './src/globals/constants'

import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListCourses from './src/components/Common/ListCourses/list-courses'


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();
const DownloadsStack = createStackNavigator();
const BrowseStack = createStackNavigator();

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options = {{headerShown: false}}/>
    <HomeStack.Screen name={ScreenKey.CourseDetail} component={CourseDetail}/>
  </HomeStack.Navigator>
);

const BrowseStackScreen = () => (
  <BrowseStack.Navigator>
    <BrowseStack.Screen name="Browse" component={Browse} options = {{headerShown: false}}/>
    <BrowseStack.Screen name={ScreenKey.ListCourses} component={ListCourses}/>
    <BrowseStack.Screen name={ScreenKey.CourseDetail} component={CourseDetail}/>
  </BrowseStack.Navigator>
);

const DownloadsStackScreen = () => (
  <DownloadsStack.Navigator>
    <DownloadsStack.Screen name="Downloads" component={Downloads} options = {{headerShown: false}}/>
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
        headerShown: false,
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
        headerShown: false,
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
        headerShown: false,
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
        headerShown: false,
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
    <MainStack.Screen
      name = {ScreenKey.ProfileScreen}
      component = {Profile}
      options = {{headerShown: false}}
    />
    <MainStack.Screen
      name = {ScreenKey.RegisterScreen}
      component = {Register}
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
