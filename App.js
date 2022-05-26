import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ASLAssist</Text>
      <View style={{width: '60%', height: '5', backgroundColor: '0A2941'}}></View>

      <Text style={{fontSize: 24, textAlign:'left', color: '414141', margin: 30}}>Username</Text>

      <Text style={{width: '60%', height: '5', backgroundColor: 'transparent'}}> </Text>

      <Text style={{fontSize: 24, textAlign:'left', color: '414141'}}>Password</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontColor: '414141',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 36
  },
  // inputText: {
  //   fontColor: '414141',
  //   fontSize: 24,
  //   alignItems: 'left'
  // }
});
