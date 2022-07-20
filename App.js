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
import lessonFivePageTwo from './LessonContent/lessonFivePageTwo'
import lessonFivePageThree from './LessonContent/lessonFivePageThree'
import lessonFivePageFour from './LessonContent/lessonFivePageFour'
import lessonSixPageTwo from './LessonContent/lessonSixPageTwo'
import lessonSixPageThree from './LessonContent/lessonSixPageThree'
import lessonSixPageFour from './LessonContent/lessonSixPageFour'
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

//practice quizzes
import PracticeQuizOne from './navigation/practiceQuizOne';
import PracticeQuizTwo from './navigation/practiceQuizTwo';
import PracticeQuizThree from './navigation/practiceQuizThree';

import QuizCompletion from './navigation/QuizCompletion'

import pqOnePageTwo from './QuizContent/pqOnePageTwo'
import pqOnePageThree from './QuizContent/pqOnePageThree'
import pqOnePageFour from './QuizContent/pqOnePageFour'
import pqTwoPageTwo from './QuizContent/pqTwoPageTwo'
import pqTwoPageThree from './QuizContent/pqTwoPageThree'
import pqTwoPageFour from './QuizContent/pqTwoPageFour'
import pqThreePageTwo from './QuizContent/pqThreePageTwo'
import pqThreePageThree from './QuizContent/pqThreePageThree'
import pqThreePageFour from './QuizContent/pqThreePageFour'

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

          <Stack.Screen name = "pqTwoPageTwo" component = {pqTwoPageTwo}/>
          <Stack.Screen name = "pqTwoPageThree" component = {pqTwoPageThree}/>
          <Stack.Screen name = "pqTwoPageFour" component = {pqTwoPageFour}/>

          <Stack.Screen name = "pqThreePageTwo" component = {pqThreePageTwo}/>
          <Stack.Screen name = "pqThreePageThree" component = {pqThreePageThree}/>
          <Stack.Screen name = "pqThreePageFour" component = {pqThreePageFour}/>

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

          <Stack.Screen name = "lessonFivePageTwo" component = {lessonFivePageTwo}/>
          <Stack.Screen name = "lessonFivePageThree" component = {lessonFivePageThree}/>
          <Stack.Screen name = "lessonFivePageFour" component = {lessonFivePageFour}/>

          <Stack.Screen name = "lessonSixPageTwo" component = {lessonSixPageTwo}/>
          <Stack.Screen name = "lessonSixPageThree" component = {lessonSixPageThree}/>
          <Stack.Screen name = "lessonSixPageFour" component = {lessonSixPageFour}/>

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

