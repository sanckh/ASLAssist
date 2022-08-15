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
import React, { useState, useEffect, useRef } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'


//components
import {theme, CustomDarkTheme, CustomDefaultTheme} from './core/theme'
import { AuthContext } from './components/context';
import registerForPushNotificationsAsync from './components/notifications'

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
import LessonFour from './navigation/LessonFour';
import LessonFive from './navigation/LessonFive';
import LessonSix from './navigation/LessonSix';
import LessonSeven from './navigation/LessonSeven';
import LessonEight from './navigation/LessonEight';
import LessonNine from './navigation/LessonNine';
import LessonTen from './navigation/LessonTen';

//lessoncontent
import lessonOnePageTwo from './LessonContent/lessonOnePageTwo'
import lessonOnePageThree from './LessonContent/lessonOnePageThree'
import lessonOnePageFour from './LessonContent/lessonOnePageFour'

import lessonOnePageFive from './LessonContent/lessonOnePageFive'
import lessonOnePageSix from './LessonContent/lessonOnePageSix'
import lessonOnePageSeven from './LessonContent/lessonOnePageSeven'
import lessonOnePageEight from './LessonContent/lessonOnePageEight'
import lessonOnePageNine from './LessonContent/lessonOnePageNine'
import lessonOnePageTen from './LessonContent/lessonOnePageTen'
import lessonOnePageEleven from './LessonContent/lessonOnePageEleven'
import lessonOnePageTwelve from './LessonContent/lessonOnePageTwelve'
import lessonOnePageThirteen from './LessonContent/lessonOnePageThirteen'
import lessonOnePageFourteen from './LessonContent/lessonOnePageFourteen'
import lessonOnePageFiftheen from './LessonContent/lessonOnePageFiftheen'


import lessonTwoPageTwo from './LessonContent/lessonTwoPageTwo'
import lessonTwoPageThree from './LessonContent/lessonTwoPageThree'
import lessonTwoPageFour from './LessonContent/lessonTwoPageFour'
import lessonTwoPageFive from './LessonContent/lessonTwoPageFive'
import lessonTwoPageSix from './LessonContent/lessonTwoPageSix'
import lessonTwoPageSeven from './LessonContent/lessonTwoPageSeven'
import lessonTwoPageEight from './LessonContent/lessonTwoPageEight'
import lessonTwoPageNine from './LessonContent/lessonTwoPageNine'
import lessonTwoPageTen from './LessonContent/lessonTwoPageTen'
import lessonTwoPageEleven from './LessonContent/lessonTwoPageEleven'
import lessonTwoPageTwelve from './LessonContent/lessonTwoPageTwelve'
import lessonTwoPageThirteen from './LessonContent/lessonTwoPageThirteen'
import lessonTwoPageFourteen from './LessonContent/lessonTwoPageFourteen'
import lessonTwoPageFiftheen from './LessonContent/lessonTwoPageFiftheen'
import lessonTwoPageSixteen from './LessonContent/lessonTwoPageSixteen'
import lessonTwoPageSeventeen from './LessonContent/lessonTwoPageSeventeen'
import lessonTwoPageEighteen from './LessonContent/lessonTwoPageEighteen'


import lessonThreePageTwo from './LessonContent/lessonThreePageTwo'
import lessonThreePageThree from './LessonContent/lessonThreePageThree'
import lessonThreePageFour from './LessonContent/lessonThreePageFour'
import lessonThreePageFive from './LessonContent/lessonThreePageFive'
import lessonThreePageSix from './LessonContent/lessonThreePageSix'
import lessonThreePageSeven from './LessonContent/lessonThreePageSeven'
import lessonThreePageEight from './LessonContent/lessonThreePageEight'
import lessonThreePageNine from './LessonContent/lessonThreePageNine'
import lessonThreePageTen from './LessonContent/lessonThreePageTen'
import lessonThreePageEleven from './LessonContent/lessonThreePageEleven'
import lessonThreePageTwelve from './LessonContent/lessonThreePageTwelve'
import lessonThreePageThirteen from './LessonContent/lessonThreePageThirteen'
import lessonThreePageFourteen from './LessonContent/lessonThreePageFourteen'
import lessonThreePageFiftheen from './LessonContent/lessonThreePageFiftheen'
import lessonThreePageSixteen from './LessonContent/lessonThreePageSixteen'

import lessonFourPageTwo from './LessonContent/lessonFourPageTwo'
import lessonFourPageThree from './LessonContent/lessonFourPageThree'
import lessonFourPageFour from './LessonContent/lessonFourPageFour'
import lessonFourPageFive from './LessonContent/lessonFourPageFive'
import lessonFourPageSix from './LessonContent/lessonFourPageSix'
import lessonFourPageSeven from './LessonContent/lessonFourPageSeven'
import lessonFourPageEight from './LessonContent/lessonFourPageEight'
import lessonFourPageNine from './LessonContent/lessonFourPageNine'
import lessonFourPageTen from './LessonContent/lessonFourPageTen'
import lessonFourPageEleven from './LessonContent/lessonFourPageEleven'
import lessonFourPageTwelve from './LessonContent/lessonFourPageTwelve'
import lessonFourPageThirteen from './LessonContent/lessonFourPageThirteen'
import lessonFourPageFourteen from './LessonContent/lessonFourPageFourteen'
import lessonFourPageFifteen from './LessonContent/lessonFourPageFifteen'
import lessonFourPageSixteen from './LessonContent/lessonFourPageSixteen'
import lessonFourPageSeventeen from './LessonContent/lessonFourPageSeventeen'

import lessonFivePageTwo from './LessonContent/lessonFivePageTwo'
import lessonFivePageThree from './LessonContent/lessonFivePageThree'
import lessonFivePageFour from './LessonContent/lessonFivePageFour'

import lessonSixPageTwo from './LessonContent/lessonSixPageTwo'
import lessonSixPageThree from './LessonContent/lessonSixPageThree'
import lessonSixPageFour from './LessonContent/lessonSixPageFour'
import lessonSixPageFive from './LessonContent/lessonSixPageFive'
import lessonSixPageSix from './LessonContent/lessonSixPageSix'
import lessonSixPageSeven from './LessonContent/lessonSixPageSeven'
import lessonSixPageEight from './LessonContent/lessonSixPageEight'
import lessonSixPageNine from './LessonContent/lessonSixPageNine'
import lessonSixPageTen from './LessonContent/lessonSixPageTen'
import lessonSixPageEleven from './LessonContent/lessonSixPageEleven'
import lessonSixPageTwelve from './LessonContent/lessonSixPageTwelve'
import lessonSixPageThirteen from './LessonContent/lessonSixPageThirteen'
import lessonSixPageFourteen from './LessonContent/lessonSixPageFourteen'
import lessonSixPageFiftheen from './LessonContent/lessonSixPageFiftheen'
import lessonSixPageSixteen from './LessonContent/lessonSixPageSixteen'
import lessonSixPageSeventeen from './LessonContent/lessonSixPageSeventeen'
import lessonSixPageEighteen from './LessonContent/lessonSixPageEighteen'

import lessonSevenPageTwo from './LessonContent/lessonSevenPageTwo'
import lessonSevenPageThree from './LessonContent/lessonSevenPageThree'
import lessonSevenPageFour from './LessonContent/lessonSevenPageFour'
import lessonEightPageTwo from './LessonContent/lessonEightPageTwo'
import lessonEightPageThree from './LessonContent/lessonEightPageThree'
import lessonEightPageFour from './LessonContent/lessonEightPageFour'
import lessonNinePageTwo from './LessonContent/lessonNinePageTwo'
import lessonNinePageThree from './LessonContent/lessonNinePageThree'
import lessonNinePageFour from './LessonContent/lessonNinePageFour'
import lessonTenPageTwo from './LessonContent/lessonTenPageTwo'
import lessonTenPageThree from './LessonContent/lessonTenPageThree'
import lessonTenPageFour from './LessonContent/lessonTenPageFour'


// import lessonOnePageFive from './LessonContent/lessonOnePageFive'
// import lessonOnePageSix from './LessonContent/lessonOnePageSix'
// import lessonOnePageSeven from './LessonContent/lessonOnePageSeven'
// import lessonOnePageEight from './LessonContent/lessonOnePageEight'
// import lessonOnePageNine from './LessonContent/lessonOnePageNine'
// import lessonOnePageTen from './LessonContent/lessonOnePageTen'
// import lessonOnePageEleven from './LessonContent/lessonOnePageEleven'
// import lessonOnePageTwelve from './LessonContent/lessonOnePageTwelve'
// import lessonOnePageThirteen from './LessonContent/lessonOnePageThirteen'
// import lessonOnePageFourteen from './LessonContent/lessonOnePageFourteen'
// import lessonOnePageFiftheen from './LessonContent/lessonOnePageFiftheen'


//practice quizzes
import PracticeQuizOne from './navigation/practiceQuizOne';
import PracticeQuizTwo from './navigation/practiceQuizTwo';
import PracticeQuizThree from './navigation/practiceQuizThree';

import QuizCompletion from './navigation/QuizCompletion'

import pqOnePageTwo from './QuizContent/pqOnePageTwo'
import pqOnePageThree from './QuizContent/pqOnePageThree'
import pqOnePageFour from './QuizContent/pqOnePageFour'
import onePFive from './PracticeQuizOneRemaining/onePFive'
import onePSix from './PracticeQuizOneRemaining/onePSix'
import onePSeven from './PracticeQuizOneRemaining/onePSeven'
import onePEight from './PracticeQuizOneRemaining/onePEight'
import onePNine from './PracticeQuizOneRemaining/onePNine'
import onePTen from './PracticeQuizOneRemaining/onePTen'
import onePEleven from './PracticeQuizOneRemaining/onePEleven'
import onePTwelve from './PracticeQuizOneRemaining/onePTwelve'
import onePThirteen from './PracticeQuizOneRemaining/onePThirteen'
import onePFourteen from './PracticeQuizOneRemaining/onePFourteen'
import onePFifteen from './PracticeQuizOneRemaining/onePFifteen'
import onePSixteen from './PracticeQuizOneRemaining/onePSixteen'
import onePSeventeen from './PracticeQuizOneRemaining/onePSeventeen'
import onePEighteen from './PracticeQuizOneRemaining/onePEighteen'
import onePNineteen from './PracticeQuizOneRemaining/onePNineteen'
import onePTwenty from './PracticeQuizOneRemaining/onePTwenty'
import onePTwentyO from './PracticeQuizOneRemaining/onePTwentyO'
import onePTwentyTw from './PracticeQuizOneRemaining/onePTwentyTw'
import onePTwentyTh from './PracticeQuizOneRemaining/onePTwentyTh'
import onePTwentyFo from './PracticeQuizOneRemaining/onePTwentyFo'
import onePTwentyFi from './PracticeQuizOneRemaining/onePTwentyFi'
import onePTwentySi from './PracticeQuizOneRemaining/onePTwentySi'
import onePTwentySe from './PracticeQuizOneRemaining/onePTwentySe'
import onePTwentyE from './PracticeQuizOneRemaining/onePTwentyE'
import onePTwentyN from './PracticeQuizOneRemaining/onePTwentyN'
import onePThirty from './PracticeQuizOneRemaining/onePThirty'
import onePThirtyO from './PracticeQuizOneRemaining/onePThirtyO'
import onePThirtyTw from './PracticeQuizOneRemaining/onePThirtyTw'
import onePThirtyTh from './PracticeQuizOneRemaining/onePThirtyTh'
import onePThirtyFo from './PracticeQuizOneRemaining/onePThirtyFo'
import onePThirtyFi from './PracticeQuizOneRemaining/onePThirtyFi'
import onePThirtySi from './PracticeQuizOneRemaining/onePThirtySi'

import pqTwoPageTwo from './QuizContent/pqTwoPageTwo'
import pqTwoPageThree from './QuizContent/pqTwoPageThree'
import pqTwoPageFour from './QuizContent/pqTwoPageFour'
import pqThreePageTwo from './QuizContent/pqThreePageTwo'
import pqThreePageThree from './QuizContent/pqThreePageThree'
import pqThreePageFour from './QuizContent/pqThreePageFour'



//lesson quizzes
import onePageOne from './LessonOneQuiz/onePageOne'
import onePageTwo from './LessonOneQuiz/onePageTwo'
import onePageThree from './LessonOneQuiz/onePageThree'
import onePageFour from './LessonOneQuiz/onePageFour'
import onePageFive from './LessonOneQuiz/onePageFive'
import onePageSix from './LessonOneQuiz/onePageSix'
import onePageSeven from './LessonOneQuiz/onePageSeven'
import onePageEight from './LessonOneQuiz/onePageEight'
import onePageNine from './LessonOneQuiz/onePageNine'
import onePageTen from './LessonOneQuiz/onePageTen'
import onePageEleven from './LessonOneQuiz/onePageEleven'
import onePageTwelve from './LessonOneQuiz/onePageTwelve'

import twoPageOne from './LessonTwoQuiz/twoPageOne'
import twoPageTwo from './LessonTwoQuiz/twoPageTwo'
import twoPageThree from './LessonTwoQuiz/twoPageThree'
import twoPageFour from './LessonTwoQuiz/twoPageFour'
import twoPageFive from './LessonTwoQuiz/twoPageFive'
import twoPageSix from './LessonTwoQuiz/twoPageSix'
import twoPageSeven from './LessonTwoQuiz/twoPageSeven'
import twoPageEight from './LessonTwoQuiz/twoPageEight'
import twoPageNine from './LessonTwoQuiz/twoPageNine'
import twoPageTen from './LessonTwoQuiz/twoPageTen'
import twoPageEleven from './LessonTwoQuiz/twoPageEleven'
import twoPageTwelve from './LessonTwoQuiz/twoPageTwelve'

import one from './LessonThreeQuiz/one'
import two from './LessonThreeQuiz/two'
import three from './LessonThreeQuiz/three'
import four from './LessonThreeQuiz/four'
import five from './LessonThreeQuiz/five'
import six from './LessonThreeQuiz/six'
import seven from './LessonThreeQuiz/seven'
import eight from './LessonThreeQuiz/eight'
import nine from './LessonThreeQuiz/nine'
import ten from './LessonThreeQuiz/ten'
import eleven from './LessonThreeQuiz/eleven'
import twelve from './LessonThreeQuiz/twelve'


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
  //cannot use this function on an emulator.
  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => console.log(token)).
  //   catch(err => console.log(err))
  // }, [])

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
          <Stack.Screen name = "Quizzes" component = {Quizzes}/>
          <Stack.Screen name = "Profile" component = {Profile}/>
          <Stack.Screen name = "Settings" component = {Settings}/>
          <Stack.Screen name = "Emergency" component = {Emergency}/>
          <Stack.Screen name = "Alphabet" component = {Alphabet}/>
          <Stack.Screen name = "Numbers" component = {Numbers}/>
          <Stack.Screen name = "LessonOne" component = {LessonOne}/>
          <Stack.Screen name = "LessonTwo" component = {LessonTwo}/>
          <Stack.Screen name = "LessonThree" component = {LessonThree}/>
          <Stack.Screen name = "LessonFour" component = {LessonFour}/>
          <Stack.Screen name = "LessonFive" component = {LessonFive}/>
          <Stack.Screen name = "LessonSix" component = {LessonSix}/>
          <Stack.Screen name = "LessonSeven" component = {LessonSeven}/>
          <Stack.Screen name = "LessonEight" component = {LessonEight}/>
          <Stack.Screen name = "LessonNine" component = {LessonNine}/>
          <Stack.Screen name = "LessonTen" component = {LessonTen}/>

          <Stack.Screen name = "PracticeQuizOne" component = {PracticeQuizOne}/>
          <Stack.Screen name = "PracticeQuizTwo" component = {PracticeQuizTwo}/>
          <Stack.Screen name = "PracticeQuizThree" component = {PracticeQuizThree}/>

          <Stack.Screen name = "QuizCompletion" component = {QuizCompletion}/>

          <Stack.Screen name = "pqOnePageTwo" component = {pqOnePageTwo}/>
          <Stack.Screen name = "pqOnePageThree" component = {pqOnePageThree}/>
          <Stack.Screen name = "pqOnePageFour" component = {pqOnePageFour}/>
          <Stack.Screen name = "onePFive" component = {onePFive}/>
          <Stack.Screen name = "onePSix" component = {onePSix}/>
          <Stack.Screen name = "onePSeven" component = {onePSeven}/>
          <Stack.Screen name = "onePEight" component = {onePEight}/>
          <Stack.Screen name = "onePNine" component = {onePNine}/>
          <Stack.Screen name = "onePTen" component = {onePTen}/>
          <Stack.Screen name = "onePEleven" component = {onePEleven}/>
          <Stack.Screen name = "onePTwelve" component = {onePTwelve}/>
          <Stack.Screen name = "onePThirteen" component = {onePThirteen}/>
          <Stack.Screen name = "onePFourteen" component = {onePFourteen}/>
          <Stack.Screen name = "onePFifteen" component = {onePFifteen}/>
          <Stack.Screen name = "onePSixteen" component = {onePSixteen}/>
          <Stack.Screen name = "onePSeventeen" component = {onePSeventeen}/>
          <Stack.Screen name = "onePEighteen" component = {onePEighteen}/>
          <Stack.Screen name = "onePNineteen" component = {onePNineteen}/>
          <Stack.Screen name = "onePTwenty" component = {onePTwenty}/>
          <Stack.Screen name = "onePTwentyO" component = {onePTwentyO}/>
          <Stack.Screen name = "onePTwentyTw" component = {onePTwentyTw}/>
          <Stack.Screen name = "onePTwentyTh" component = {onePTwentyTh}/>
          <Stack.Screen name = "onePTwentyFo" component = {onePTwentyFo}/>
          <Stack.Screen name = "onePTwentyFi" component = {onePTwentyFi}/>
          <Stack.Screen name = "onePTwentySi" component = {onePTwentySi}/>
          <Stack.Screen name = "onePTwentySe" component = {onePTwentySe}/>
          <Stack.Screen name = "onePTwentyE" component = {onePTwentyE}/>
          <Stack.Screen name = "onePTwentyN" component = {onePTwentyN}/>
          <Stack.Screen name = "onePThirty" component = {onePThirty}/>
          <Stack.Screen name = "onePThirtyO" component = {onePThirtyO}/>
          <Stack.Screen name = "onePThirtyTw" component = {onePThirtyTw}/>
          <Stack.Screen name = "onePThirtTh" component = {onePThirtyTh}/>
          <Stack.Screen name = "onePThirtyFo" component = {onePThirtyFo}/>
          <Stack.Screen name = "onePThirtyFi" component = {onePThirtyFi}/>
          <Stack.Screen name = "onePThirtySi" component = {onePThirtySi}/>

          <Stack.Screen name = "pqTwoPageTwo" component = {pqTwoPageTwo}/>
          <Stack.Screen name = "pqTwoPageThree" component = {pqTwoPageThree}/>
          <Stack.Screen name = "pqTwoPageFour" component = {pqTwoPageFour}/>

          <Stack.Screen name = "pqThreePageTwo" component = {pqThreePageTwo}/>
          <Stack.Screen name = "pqThreePageThree" component = {pqThreePageThree}/>
          <Stack.Screen name = "pqThreePageFour" component = {pqThreePageFour}/>

          <Stack.Screen name = "onePageOne" component = {onePageOne}/>
          <Stack.Screen name = "onePageTwo" component = {onePageTwo}/>
          <Stack.Screen name = "onePageThree" component = {onePageThree}/>
          <Stack.Screen name = "onePageFour" component = {onePageFour}/>
          <Stack.Screen name = "onePageFive" component = {onePageFive}/>
          <Stack.Screen name = "onePageSix" component = {onePageSix}/>
          <Stack.Screen name = "onePageSeven" component = {onePageSeven}/>
          <Stack.Screen name = "onePageEight" component = {onePageEight}/>
          <Stack.Screen name = "onePageNine" component = {onePageNine}/>
          <Stack.Screen name = "onePageTen" component = {onePageTen}/>
          <Stack.Screen name = "onePageEleven" component = {onePageEleven}/>
          <Stack.Screen name = "onePageTwelve" component = {onePageTwelve}/>

          <Stack.Screen name = "twoPageOne" component = {twoPageOne}/>
          <Stack.Screen name = "twoPageTwo" component = {twoPageTwo}/>
          <Stack.Screen name = "twoPageThree" component = {twoPageThree}/>
          <Stack.Screen name = "twoPageFour" component = {twoPageFour}/>
          <Stack.Screen name = "twoPageFive" component = {twoPageFive}/>
          <Stack.Screen name = "twoPageSix" component = {twoPageSix}/>
          <Stack.Screen name = "twoPageSeven" component = {twoPageSeven}/>
          <Stack.Screen name = "twoPageEight" component = {twoPageEight}/>
          <Stack.Screen name = "twoPageNine" component = {twoPageNine}/>
          <Stack.Screen name = "twoPageTen" component = {twoPageTen}/>
          <Stack.Screen name = "twoPageEleven" component = {twoPageEleven}/>
          <Stack.Screen name = "twoPageTwelve" component = {twoPageTwelve}/>

          <Stack.Screen name = "one" component = {one}/>
          <Stack.Screen name = "two" component = {two}/>
          <Stack.Screen name = "three" component = {three}/>
          <Stack.Screen name = "four" component = {four}/>
          <Stack.Screen name = "five" component = {five}/>
          <Stack.Screen name = "six" component = {six}/>
          <Stack.Screen name = "seven" component = {seven}/>
          <Stack.Screen name = "eight" component = {eight}/>
          <Stack.Screen name = "nine" component = {nine}/>
          <Stack.Screen name = "ten" component = {ten}/>
          <Stack.Screen name = "eleven" component = {eleven}/>
          <Stack.Screen name = "twelve" component = {twelve}/>

          <Stack.Screen name = "Achievements" component = {Achievement}/>

          <Stack.Screen name = "lessonOnePageTwo" component = {lessonOnePageTwo}/>
          <Stack.Screen name = "lessonOnePageThree" component = {lessonOnePageThree}/>
          <Stack.Screen name = "lessonOnePageFour" component = {lessonOnePageFour}/>
          <Stack.Screen name = "lessonOnePageFive" component = {lessonOnePageFive}/>
          <Stack.Screen name = "lessonOnePageSix" component = {lessonOnePageSix}/>
          <Stack.Screen name = "lessonOnePageSeven" component = {lessonOnePageSeven}/>
          <Stack.Screen name = "lessonOnePageEight" component = {lessonOnePageEight}/>
          <Stack.Screen name = "lessonOnePageNine" component = {lessonOnePageNine}/>
          <Stack.Screen name = "lessonOnePageTen" component = {lessonOnePageTen}/>
          <Stack.Screen name = "lessonOnePageEleven" component = {lessonOnePageEleven}/>
          <Stack.Screen name = "lessonOnePageTwelve" component = {lessonOnePageTwelve}/>
          <Stack.Screen name = "lessonOnePageThirteen" component = {lessonOnePageThirteen}/>
          <Stack.Screen name = "lessonOnePageFourteen" component = {lessonOnePageFourteen}/>
          <Stack.Screen name = "lessonOnePageFiftheen" component = {lessonOnePageFiftheen}/>

          <Stack.Screen name = "lessonTwoPageTwo" component = {lessonTwoPageTwo}/>
          <Stack.Screen name = "lessonTwoPageThree" component = {lessonTwoPageThree}/>
          <Stack.Screen name = "lessonTwoPageFour" component = {lessonTwoPageFour}/>
          <Stack.Screen name = "lessonTwoPageFive" component = {lessonTwoPageFive}/>
          <Stack.Screen name = "lessonTwoPageSix" component = {lessonTwoPageSix}/>
          <Stack.Screen name = "lessonTwoPageSeven" component = {lessonTwoPageSeven}/>
          <Stack.Screen name = "lessonTwoPageEight" component = {lessonTwoPageEight}/>
          <Stack.Screen name = "lessonTwoPageNine" component = {lessonTwoPageNine}/>
          <Stack.Screen name = "lessonTwoPageTen" component = {lessonTwoPageTen}/>
          <Stack.Screen name = "lessonTwoPageEleven" component = {lessonTwoPageEleven}/>
          <Stack.Screen name = "lessonTwoPageTwelve" component = {lessonTwoPageTwelve}/>
          <Stack.Screen name = "lessonTwoPageThirteen" component = {lessonTwoPageThirteen}/>
          <Stack.Screen name = "lessonTwoPageFourteen" component = {lessonTwoPageFourteen}/>
          <Stack.Screen name = "lessonTwoPageFiftheen" component = {lessonTwoPageFiftheen}/>
          <Stack.Screen name = "lessonTwoPageSixteen" component = {lessonTwoPageSixteen}/>
          <Stack.Screen name = "lessonTwoPageSeventeen" component = {lessonTwoPageSeventeen}/>
          <Stack.Screen name = "lessonTwoPageEighteen" component = {lessonTwoPageEighteen}/>

          <Stack.Screen name = "lessonThreePageTwo" component = {lessonThreePageTwo}/>
          <Stack.Screen name = "lessonThreePageThree" component = {lessonThreePageThree}/>
          <Stack.Screen name = "lessonThreePageFour" component = {lessonThreePageFour}/>
          <Stack.Screen name = "lessonThreePageFive" component = {lessonThreePageFive}/>
          <Stack.Screen name = "lessonThreePageSix" component = {lessonThreePageSix}/>
          <Stack.Screen name = "lessonThreePageSeven" component = {lessonThreePageSeven}/>
          <Stack.Screen name = "lessonThreePageEight" component = {lessonThreePageEight}/>
          <Stack.Screen name = "lessonThreePageNine" component = {lessonThreePageNine}/>
          <Stack.Screen name = "lessonThreePageTen" component = {lessonThreePageTen}/>
          <Stack.Screen name = "lessonThreePageEleven" component = {lessonThreePageEleven}/>
          <Stack.Screen name = "lessonThreePageTwelve" component = {lessonThreePageTwelve}/>
          <Stack.Screen name = "lessonThreePageThirteen" component = {lessonThreePageThirteen}/>
          <Stack.Screen name = "lessonThreePageFourteen" component = {lessonThreePageFourteen}/>
          <Stack.Screen name = "lessonThreePageFiftheen" component = {lessonThreePageFiftheen}/>
          <Stack.Screen name = "lessonThreePageSixteen" component = {lessonThreePageSixteen}/>

          <Stack.Screen name = "lessonFourPageTwo" component = {lessonFourPageTwo}/>
          <Stack.Screen name = "lessonFourPageThree" component = {lessonFourPageThree}/>
          <Stack.Screen name = "lessonFourPageFour" component = {lessonFourPageFour}/>
          <Stack.Screen name = "lessonFourPageFive" component = {lessonFourPageFive}/>
          <Stack.Screen name = "lessonFourPageSix" component = {lessonFourPageSix}/>
          <Stack.Screen name = "lessonFourPageSeven" component = {lessonFourPageSeven}/>
          <Stack.Screen name = "lessonFourPageEight" component = {lessonFourPageEight}/>
          <Stack.Screen name = "lessonFourPageNine" component = {lessonFourPageNine}/>
          <Stack.Screen name = "lessonFourPageTen" component = {lessonFourPageTen}/>
          <Stack.Screen name = "lessonFourPageEleven" component = {lessonFourPageEleven}/>
          <Stack.Screen name = "lessonFourPageTwelve" component = {lessonFourPageTwelve}/>
          <Stack.Screen name = "lessonFourPageThirteen" component = {lessonFourPageThirteen}/>
          <Stack.Screen name = "lessonFourPageFourteen" component = {lessonFourPageFourteen}/>
          <Stack.Screen name = "lessonFourPageFifteen" component = {lessonFourPageFifteen}/>
          <Stack.Screen name = "lessonFourPageSixteen" component = {lessonFourPageSixteen}/>
          <Stack.Screen name = "lessonFourPageSeventeen" component = {lessonFourPageSeventeen}/>

          <Stack.Screen name = "lessonFivePageTwo" component = {lessonFivePageTwo}/>
          <Stack.Screen name = "lessonFivePageThree" component = {lessonFivePageThree}/>
          <Stack.Screen name = "lessonFivePageFour" component = {lessonFivePageFour}/>

          <Stack.Screen name = "lessonSixPageTwo" component = {lessonSixPageTwo}/>
          <Stack.Screen name = "lessonSixPageThree" component = {lessonSixPageThree}/>
          <Stack.Screen name = "lessonSixPageFour" component = {lessonSixPageFour}/>
          <Stack.Screen name = "lessonSixPageFive" component = {lessonSixPageFive}/>
          <Stack.Screen name = "lessonSixPageSix" component = {lessonSixPageSix}/>
          <Stack.Screen name = "lessonSixPageSeven" component = {lessonSixPageSeven}/>
          <Stack.Screen name = "lessonSixPageEight" component = {lessonSixPageEight}/>
          <Stack.Screen name = "lessonSixPageNine" component = {lessonSixPageNine}/>
          <Stack.Screen name = "lessonSixPageTen" component = {lessonSixPageTen}/>
          <Stack.Screen name = "lessonSixPageEleven" component = {lessonSixPageEleven}/>
          <Stack.Screen name = "lessonSixPageTwelve" component = {lessonSixPageTwelve}/>
          <Stack.Screen name = "lessonSixPageThirteen" component = {lessonSixPageThirteen}/>
          <Stack.Screen name = "lessonSixPageFourteen" component = {lessonSixPageFourteen}/>
          <Stack.Screen name = "lessonSixPageFiftheen" component = {lessonSixPageFifhteen}/>
          <Stack.Screen name = "lessonSixPageSixteen" component = {lessonSixPageSixteen}/>
          <Stack.Screen name = "lessonSixPageSeventeen" component = {lessonSixPageSeventeen}/>
          <Stack.Screen name = "lessonSixPageEighteen" component = {lessonSixPageEighteen}/>


          <Stack.Screen name = "lessonSevenPageTwo" component = {lessonSevenPageTwo}/>
          <Stack.Screen name = "lessonSevenPageThree" component = {lessonSevenPageThree}/>
          <Stack.Screen name = "lessonSevenPageFour" component = {lessonSevenPageFour}/>

          <Stack.Screen name = "lessonEightPageTwo" component = {lessonEightPageTwo}/>
          <Stack.Screen name = "lessonEightPageThree" component = {lessonEightPageThree}/>
          <Stack.Screen name = "lessonEightPageFour" component = {lessonEightPageFour}/>

          <Stack.Screen name = "lessonNinePageTwo" component ={lessonNinePageTwo}/>
          <Stack.Screen name = "lessonNinePageThree" component = {lessonNinePageThree}/>
          <Stack.Screen name = "lessonNinePageFour" component = {lessonNinePageFour}/>

          <Stack.Screen name = "lessonTenPageTwo" component = {lessonTenPageTwo}/>
          <Stack.Screen name = "lessonTenPageThree" component = {lessonTenPageThree}/>
          <Stack.Screen name = "lessonTenPageFour" component = {lessonTenPageFour}/>
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>

  );
}

