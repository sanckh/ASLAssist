import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'
import { useTheme } from '@react-navigation/native'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'contained' && { backgroundColor: theme.colors.error },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    // borderColor:'#57131b',
    borderRadius: 15,
    borderWidth: 5,
    marginBottom: 24,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',

    
  },
  text: {
    color: theme.colors.text,
     textAlign: 'center'
   },
})