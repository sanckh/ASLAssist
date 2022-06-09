import { DefaultTheme } from '@react-navigation/native';


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

// export const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     text: '#000000',
//     primary: 'tomato',
//     secondary: '#414141',
//     error: '#f13a59',
//     white: '#fff',
//     buttonPurple: '#E8DFF5',
//     buttonPink: '#FCE1E4',
//     buttonYellow: '#FCF4DD',
//     buttonGreen: '#DDEDEA',
//     button5: '#DAEAF6',
//     button6: '#FFFDF9',
//     button7: '#230C46',
//     button8: '#414141',
//     button9: '#57131B',
//     button10: '#093F35',
//     button11: '#4F3E0E',
//     button12: '#0A2941',
//   },
//   ...DefaultTheme,
//   fonts: {
//     ...DefaultTheme.fonts,
//     loginFont: 'italiana',
//     headlineText: 'Lexend',
//     subHeadlineText: 'Lexend-Deca',
//     lessonText: 'Inter',

//   }
// }