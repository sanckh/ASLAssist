import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors, Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { useTheme } from '@react-navigation/native'



export default function Header(props) {

  const {colors} = useTheme();

  return <Text style={{
    fontSize: 21,
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 15
  }} {...props} />
}
