import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';
import merge from 'deepmerge'
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'


//components
import {theme, CustomDarkTheme, CustomDefaultTheme} from './core/theme'
import { AuthContext } from './components/context';

//screens go here
import StartScreen from './navigation/StartScreen';
import LoginScreen from './navigation/LoginScreen';
import RegisterScreen from './navigation/RegisterScreen';
import Quizzes from './navigation/Quizzes';
import Settings from './navigation/Settings';
import HomeDash from './navigation/HomeDash';
import Profile from './navigation/Profile';
import ResetPasswordScreen from './navigation/ResetPasswordScreen';
import AboutScreen from './navigation/AboutScreen';
import Achievement from './navigation/Achievements';

//lessons
import Emergency from './navigation/Emergency';
import Alphabet from './navigation/Alphabet';
import Numbers from './navigation/Numbers';
import LessonOne from './navigation/LessonOne';
import LessonTwo from './navigation/LessonTwo';
import LessonThree from './navigation/LessonThree';

//lessoncontent
import lessonOnePageTwo from './LessonContent/lessonOnePageTwo'
import lessonOnePageThree from './LessonContent/lessonOnePageThree'
import lessonOnePageFour from './LessonContent/lessonOnePageFour'


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
        {/**This is a tab for the login screen for testing purposes */}
        <Tab.Screen 
        name = 'Login' 
        component = {StartScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarColor: '#000000',
          tabBarIcon: ({ color }) => (
            <Ionicons name = 'list' color = {color} size = {26} /> 
          ),
        }}
        />
      </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const authContext = React.useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme = {theme}>
      <AuthContext.Provider value={authContext}>
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
          <Stack.Screen name = "ResetPasswordScreen" component = {ResetPasswordScreen}/>
          <Stack.Screen name = "AboutScreen" component = {AboutScreen} />
          <Stack.Screen name = "Home" component = {Home}/>
          <Stack.Screen name = "Emergency" component = {Emergency}/>
          <Stack.Screen name = "Alphabet" component = {Alphabet}/>
          <Stack.Screen name = "Numbers" component = {Numbers}/>
          <Stack.Screen name = "LessonOne" component = {LessonOne}/>
          <Stack.Screen name = "LessonTwo" component = {LessonTwo}/>
          <Stack.Screen name = "LessonThree" component = {LessonThree}/>
          <Stack.Screen name = "Achievements" component = {Achievement}/>

          <Stack.Screen name = "lessonOnePageTwo" component = {lessonOnePageTwo}/>
          <Stack.Screen name = "lessonOnePageThree" component = {lessonOnePageThree}/>
          <Stack.Screen name = "lessonOnePageFour" component = {lessonOnePageFour}/>
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>

  );
}

