import React from 'react'

//components
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({navigation}){
    return(
        <Background>
            <Logo />
            <Header>ASL Assist</Header>
            <Paragraph>
                Log in or sign up below.
            </Paragraph>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('LoginScreen')}
            >
                Login
            </Button>
            <Button
            mode = "outlined"
            onPress = {() => navigation.navigate('RegisterScreen')}
            >
                Sign Up
            </Button>
        </Background>
    )
}