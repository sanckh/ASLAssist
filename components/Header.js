import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors, Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 12,
  },
})