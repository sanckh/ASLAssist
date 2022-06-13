import React, {useCallback} from 'react';
import { View, Text, Alert, Linking } from 'react-native';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import OpenURLButton from '../components/openUrlButton'


export default function AboutScreen({navigation}) {

    const supportedURL = 'https://google.com';

    return(
        <Background>
            <BackButton goBack = {navigation.goBack} />
            <Logo/>
            <Header>About Us</Header>
            <Paragraph>
                This App was created and developed by Paulene, Vera, and Corey.
            </Paragraph>
            <Paragraph>
                This was developed as a part of our capstone for Bachelor's of Science in Computer Science with a focus in
                Software Engineering. 
            </Paragraph>
            <Paragraph>
                Add more info here
            </Paragraph>
            <OpenURLButton url = {supportedURL}> More info</OpenURLButton>
        </Background>
    )
}