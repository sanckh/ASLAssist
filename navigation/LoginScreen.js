import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { List } from 'react-native-paper'

import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'


export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const emailError = emailValidator(email) 
    const passwordError = passwordValidator(password)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        //status message here
        const user = userCredentials.user;
        navigation.replace("Home")
        console.log(email, '\n', password)
        console.log('User is Logged In')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const giveEXP = () => {
    

  }

  return (
    <Background>
    <TouchableOpacity  onPress = { () => navigation.replace('StartScreen')} style={styles.iconContainer}>
      <List.Icon icon="arrow-left" />
    </TouchableOpacity>
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  iconContainer: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})