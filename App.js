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
import Lessons from './navigation/Lessons';
import Quizzes from './navigation/Quizzes';
import Settings from './navigation/Settings';

const Tab = createMaterialBottomTabNavigator();

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

            if(rn == 'Lessons'){
              iconName = focused ? 'list' : 'fast-food'
            }
            else if(rn == 'Quizzes'){
              iconName = focused ? 'list' : 'list-outline'
            }
            else if(rn == 'Settings'){
              iconName = focused ? 'list' : 'settings-outline'
            }
            return <Ionicons name = {iconName} size = {25} color = {color}/>
          }
        })}>
        <Tab.Screen name = 'Lessons' component = {Lessons}/>
        <Tab.Screen name = 'Quizzes' component = {Quizzes}/>
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
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name = 'Home' component = {Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;