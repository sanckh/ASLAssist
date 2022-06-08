import {Provider} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';

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
import LessonFour from './navigation/LessonFour';
import LessonFive from './navigation/LessonFive';
import LessonSix from './navigation/LessonSix';

const Tab = createMaterialBottomTabNavigator();


function Home() {
  return (
    <Provider theme = {theme}>
      <Tab.Navigator
      activeColor= {theme.colors.accent}
      inactiveColor="#414141"
      barStyle = {{
        backgroundColor: theme.colors.primary,
        padding: 10,
      }}
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if(rn == 'HomeDash'){
              iconName = focused ? 'home' : 'home-outline'
            }
            else if(rn == 'Quizzes'){
              iconName = focused ? 'list' : 'list-outline'
            }
            else if(rn == 'Profile'){
              iconName = focused ? 'person' : 'person-outline'
            }
            else if(rn == 'Settings'){
              iconName = focused ? 'list' : 'settings-outline'
            }
            else if(rn == 'LoginScreen'){
              iconName = focused ? 'list' : 'settings-outline'
            }
            return <Ionicons name = {iconName} size = {25} color = {color}/>
          }
        })}
                >
        <Tab.Screen name = 'HomeDash' component = {HomeDash}/>
        <Tab.Screen name = 'Quizzes' component = {Quizzes}/>
        <Tab.Screen name = 'Profile' component = {Profile}/>
        <Tab.Screen name = 'Settings' component = {Settings}/>
        {/* <Tab.Screen name = 'LoginScreen' component = {LoginScreen}/> */}
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
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name = "Home" component = {Home}/>
          <Stack.Screen name = "LessonOne" component = {LessonOne}/>
          <Stack.Screen name = "LessonTwo" component = {LessonTwo}/>
          <Stack.Screen name = "LessonThree" component = {LessonThree}/>
          <Stack.Screen name = "LessonFour" component = {LessonFour}/>
          <Stack.Screen name = "LessonFive" component = {LessonFive}/>
          <Stack.Screen name = "LessonSix" component = {LessonSix}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;