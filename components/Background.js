import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'
import { useTheme } from '@react-navigation/native';

export default function Background({ children }) {

  const {colors} = useTheme();

  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: colors.background}}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 1000,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})