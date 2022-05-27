import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#fff',
    secondary: '#414141',
    error: '#f13a59',
    white: '#fff',
    buttonPurple: '#E8DFF5',
    buttonPink: '#FCE1E4',
    buttonYellow: '#FCF4DD',
    buttonGreen: '#DDEDEA',
    button5: '#DAEAF6',
    button6: '#FFFDF9',
    button7: '#230C46',
    button8: '#414141',
    button9: '#57131B',
    button10: '#093F35',
    button11: '#4F3E0E',
    button12: '#0A2941',
  },
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    loginFont: 'italiana',
    headlineText: 'Lexend',
    subHeadlineText: 'Lexend-Deca',
    lessonText: 'Inter',

  }
}