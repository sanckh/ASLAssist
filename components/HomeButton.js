import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { List, TouchableRipple } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


export default function HomeButton() {
  const navigation = useNavigation(); 

  return (
    <TouchableRipple onPress = {() => navigation.navigate('Home')}
                      style={styles.container}>
      <List.Icon icon="home" />
    </TouchableRipple>
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