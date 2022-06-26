import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Reset Email Sent!")
      console.log(email)
      navigation.navigate('LoginScreen')
    })
    .then(() => {
      setEmail('')
    })
    .catch((error) => {
      console.log(error.message)
      console.log(error.code)
      // ..
    });
    
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Reset Password</Header>
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
        description="You will receive an email with a password reset link."
      />
      <Button
        mode="contained"

        onPress = {sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}