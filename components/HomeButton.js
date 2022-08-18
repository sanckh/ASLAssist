import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { List } from 'react-native-paper'


export default function HomeButton({ navigation }) {
  return (
    <TouchableOpacity onPress = {() => navigation.navigate('Home')}style={styles.container}>
      <List.Icon icon="home" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})