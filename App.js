import React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler'
import { navigationRef } from './RootNavigation';
import * as RootNavigation from'./RootNavigation';
import Home from './src/components/Main/Home/Home'
import Browse from './src/components/Main/Browse/Browse'
import Search from './src/components/Main/Search/Search'
import Downloads from './src/components/Main/Downloads/Downloads'
import CourseDetail from './src/components/Common/CourseDetail/CourseDetail'
import SplashScreen from './src/components/SplashScreen/splash-screen'
import Login from './src/components/Authentication/Login/Login'
import Register from './src/components/Authentication/Register/Register'
import Profile from './src/components/AccountManagement/Profile'
import UpdateInfo from "./src/components/AccountManagement/UpdateInfo";
import ChangePassword from "./src/components/AccountManagement/ChangePassword";
import ChangeEmail from './src/components/AccountManagement/ChangeEmail'
import InstructorInfo from './src/components/Main/Browse/InstructorInfo'
import RegisterCourse from './src/components/Common/Course/RegisterCourse'
import LearnCourse from './src/components/Common/Course/LearnCourse'
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
const infoButton = () =>{
  RootNavigation.navigate(ScreenKey.ProfileScreen)
}

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name="Home" 
      component={Home} 
      options = {{headerRight: () => (
        <TouchableOpacity onPress={infoButton} >
          <MaterialCommunityIcons name="account-circle" color={"#000"} size={26} />
      </TouchableOpacity>
      )}}/>
    <HomeStack.Screen name={ScreenKey.CourseDetail} component={CourseDetail}/>
    {/* <HomeStack.Screen name={ScreenKey.ProfileScreen} component={Profile} options={{title:"Profile"}}/> */}
  </HomeStack.Navigator>
);

const BrowseStackScreen = () => (
  <BrowseStack.Navigator>
    <BrowseStack.Screen 
      name="Browse" 
      component={Browse} 
      options = {{headerRight: () => (
        <TouchableOpacity onPress={infoButton} >
          <MaterialCommunityIcons name="account-circle" color={"#000"} size={26} />
      </TouchableOpacity>
      )}}/>
    {/* <BrowseStack.Screen name={ScreenKey.ProfileScreen} component={Profile}/> */}
    <BrowseStack.Screen name={ScreenKey.ListCourses} component={ListCourses}/>
    <BrowseStack.Screen name={ScreenKey.CourseDetail} component={CourseDetail}/>
  </BrowseStack.Navigator>
);

const DownloadsStackScreen = () => (
  <DownloadsStack.Navigator>
    <DownloadsStack.Screen 
      name="Downloads" 
      component={Downloads} 
      options = {{headerRight: () => (
        <TouchableOpacity onPress={infoButton} >
          <MaterialCommunityIcons name="account-circle" color={"#000"} size={26} />
      </TouchableOpacity>
      )}}/>
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
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
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
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
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
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
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
      options = {{title:"Profile"}}
    />
    <MainStack.Screen
      name = {ScreenKey.RegisterScreen}
      component = {Register}
      options = {{headerShown: false}}
    />
    <MainStack.Screen
      name = {ScreenKey.UpdateInfoScreen}
      component = {UpdateInfo}
      options = {{title:"Update Information"}}
    />
    <MainStack.Screen
      name = {ScreenKey.ChangePasswordScreen}
      component = {ChangePassword}
      options = {{title:"Change Password"}}
    />
    <MainStack.Screen
      name = {ScreenKey.ChangeEmailScreen}
      component = {ChangeEmail}
      options = {{title:"Change Email"}}
    />
    <MainStack.Screen
      name = {ScreenKey.InstructorInfoScreen}
      component = {InstructorInfo}
      options = {{title:"Instructor Info"}}
    />
    <MainStack.Screen
      name = {ScreenKey.LearnCourseScreen}
      component = {LearnCourse}
      options = {{title:"Learn Course"}}
    />
    <MainStack.Screen
      name = {ScreenKey.RegisterCourseScreen}
      component = {RegisterCourse}
      options = {{title:"Register Course"}}
    />
  </MainStack.Navigator>
)

export default function App() {
  return (
    
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigation/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  button: {
      height: 100,
      borderRadius: 50,
      margin: 5,
  },
  touch:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title:{
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold'
  }
})