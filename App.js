import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import Home from './src/components/Main/Home/Home'
import ListCourses from './src/components/Courses/ListCourses/list-courses'
import Browse from './src/components/Main/Browse/Browse'
import Search from './src/components/Main/Search/Search'
import Downloads from './src/components/Main/Downloads/Downloads'
import CoursesDetail from './src/components/CourseDetail/CourseDetail'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator mode = "modal">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen 
        name="CoursesDetail" 
        component={CoursesDetail} 
        options={{
          title: 'Courses Detail',
          headerShown: false
        }}
      />
      <MainStack.Screen name="ListCourses" component={ListCourses} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStackScreen/>
      {/* <Tab.Navigator
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Downloads" component={Downloads} />
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});