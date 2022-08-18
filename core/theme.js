import { DefaultTheme } from '@react-navigation/native';

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

export const CustomDefaultTheme = { //default == light theme
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#FCF4DD',
    text: 'black',
    card: 'tomato'
  }
}

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#414141',
    text: '#ffffff'
  }
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'black',
    primary: '#DDEDEA', //primary color for your app, usually your brand color.
    accent: '#093f35', //secondary color for your app which complements the primary color.
    background: '#FCF4DD', //background color for pages, such as lists.
    surface: '#DDEDEA', //background color for elements containing content, such as cards.
    error: 'red',
    placeholder: '#414141',
    backdrop: '#fff',
    onSurface: '#fff',
    notification: '#fff'
  },
}
