import {Provider as PaperProvider, } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';
import merge from 'deepmerge'
import React from 'react';

//components
import {theme} from './core/theme'

//screens go here
import StartScreen from './navigation/StartScreen';
import LoginScreen from './navigation/LoginScreen';
import RegisterScreen from './navigation/RegisterScreen';
import Quizzes from './navigation/Quizzes';
import Settings from './navigation/Settings';
import HomeDash from './navigation/HomeDash';
import Profile from './navigation/Profile';

//lessons
import LessonOne from './navigation/LessonOne';
import LessonTwo from './navigation/LessonTwo';
import LessonThree from './navigation/LessonThree';

const Tab = createMaterialBottomTabNavigator();


function Home() {
  return (
      <Tab.Navigator
      activeColor='#fff'
      shifting = 'true'
      barStyle= {{

    }}
      >
        <Tab.Screen 
          name = 'HomeDash' 
          component = {HomeDash}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <Ionicons name = 'home' color = {color} size = {26} /> 
            ),
          }}/>
        <Tab.Screen 
          name = 'Quizzes' 
          component = {Quizzes}
          options={{
            tabBarLabel: 'Quizzes',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color }) => (
              <Ionicons name = 'list' color = {color} size = {26} /> 
            ),
          }}
          />
        <Tab.Screen 
          name = 'Profile' 
          component = {Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#d02860',
            tabBarIcon: ({ color }) => (
              <Ionicons name = 'person' color = {color} size = {26} /> 
            ),
          }}
          />
        <Tab.Screen 
        name = 'Settings' 
        component = {Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Ionicons name = 'settings' color = {color} size = {26} /> 
          ),
        }}
        />
      </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name = "Home" component = {Home}/>
          <Stack.Screen name = "LessonOne" component = {LessonOne}/>
          <Stack.Screen name = "LessonTwo" component = {LessonTwo}/>
          <Stack.Screen name = "LessonThree" component = {LessonThree}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}

