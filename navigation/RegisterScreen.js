import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
// import { getAuth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

export default function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(()=> {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if(user) {
  //       navigation.replace("LoginScreen")
  //     }
  //   })
  //   return unsubscribe
  // }, [])

  const showAlert = () => 
    Alert.alert(
      "Authentication Successful",
      "Please login to access the app!",
      // [
      //   {
      //     text: "Cancel",
      //     onPress: () => Alert.alert("Cancel Pressed"),
      //     style: "cancel",
      //   },
      // ],
      // {
      //   cancelable: true,
      //   onDismiss: () => 
      //   Alert.alert(
      //     "This alert was dismissed by tapping outside of the alert dialogue."
      //   ),
      // }
    );

  const handleSignUp = () => {
    const emailError = emailValidator(email)
    const passwordError = passwordValidator(password)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
      createUserWithEmailAndPassword(auth, email, password)
      //status message here
      .then((userCredentials) => {
        const user = userCredentials.user;
        showAlert();
      })
      .finally((userCredentials) => {
        navigation.navigate('LoginScreen')
      })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
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
      <Button
        mode="contained"
        onPress={handleSignUp}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
})