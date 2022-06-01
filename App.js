import { StyleSheet, Text, View, Button, Linking, Dimensions } from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, DefaultTheme, Provider} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

//components
import {theme} from './core/theme'

//screens go here
import StartScreen from './navigation/StartScreen';
import LoginScreen from './navigation/LoginScreen';
import RegisterScreen from './navigation/RegisterScreen';
import Lessons from './navigation/Lessons';
import Quizzes from './navigation/Quizzes';
import Settings from './navigation/Settings';
import HomeDash from './navigation/HomeDash';
import Profile from './navigation/Profile';
import QuizDash from './navigation/QuizDash';

const Tab = createMaterialBottomTabNavigator();
const fullScreenWidth = Dimensions.get('window').width;
const bottomTab = createBottomTabNavigator();

function Home() {
  return (
    <Provider theme = {theme}>
      <Tab.Navigator
      barStyle = {{
        backgroundColor: theme.colors.accent,
        padding: 10,
        
      }}
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if(rn == 'HomeDash'){
              iconName = focused ? 'home' : 'home-outline'
            }
            else if(rn == 'QuizDash'){
              iconName = focused ? 'list' : 'list-outline'
            }
            else if(rn == 'Profile'){
              iconName = focused ? 'person' : 'person-outline'
            }
            else if(rn == 'Settings'){
              iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name = {iconName} size = {25} color = {color}/>
          }
        })}
        tabBarOptions={{
          activeTintColor: "#230C46",
          inactiveTintColor: "#414141",
          labelStyle: {fontSize: 16},
          style: {width: fullScreenWidth}
        }}
        >
        <Tab.Screen name = 'HomeDash' component = {HomeDash}/>
        <Tab.Screen name = 'QuizDash' component = {QuizDash}/>
        <Tab.Screen name = 'Profile' component = {Profile}/>
        <Tab.Screen name = 'Settings' component = {Settings}/>
      </Tab.Navigator>
    </Provider>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider theme = {theme}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='StartScreen'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name = 'Home' component = {Home}/>
          <Stack.Screen name = "HomeDash" component={HomeDash}/>
          <Stack.Screen name = "QuizDash" component={QuizDash}/>
          <Stack.Screen name = "Profile" component={Profile}/>
          <Stack.Screen name = "Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

// function HomeDashScreen(){
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name = "HomeDash" component={HomeDash}/>
//     </Stack.Navigator>
//   )
// }
// function QuizDashScreen(){
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name = "QuizDash" component={QuizDash}/>
//     </Stack.Navigator>
//   )
// }
// function ProfileScreen(){
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name = "Profile" component={Profile}/>
//     </Stack.Navigator>
//   )
// }
// function SettingScreen(){
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name = "Settings" component={Settings}/>
//     </Stack.Navigator>
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 36
  },
  tabBar: {
    //backgroundColor: theme.colors.buttonPink,
  }
});

export default App;