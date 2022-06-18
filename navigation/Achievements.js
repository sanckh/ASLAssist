import { Text, View, ScrollView, StyleSheet, Alert, Linking } from 'react-native';
import React, {useCallback} from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

export default function Achievement({navigation}){
    return(
        <Background>
            <BackButton goBack = {navigation.goBack} />
            <Logo/>
            <Header>Achievements</Header>
            <Paragraph>
                This is where the list of all achievements will go.
            </Paragraph>

        </Background>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
      marginLeft:15,
      marginRight:20,
      alignSelf:'center',
      width:20,
      height:24,
      justifyContent:'center'
    },
    header:{
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconStyle: {
      alignSelf: 'center', 
      padding: 5, 
      marginRight: 10
    }
  });
