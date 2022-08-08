import { Text, View, Pressable, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Button from '../components/Button';
import { theme } from '../core/theme';
import React, { Component } from 'react';
import Ripple from 'react-native-material-ripple';

export default function PracticeOne({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <BackButton goBack = {navigation.goBack} />
            
            <Header style = {styles.header}>Pratice Quiz</Header>
            {/* lesson content */}
            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fasthma.gif?alt=media&token=96305886-e903-4dc5-80f2-26dd59454955'
                }}>
                </Image>
                <Text style={styles.text}>What sign is this?</Text>
                <View style={styles.screen}>
           
            <View style={styles.body}>
                <Ripple style={styles.button} 
                        rippleColor='white' 
                        rippleOpacity={0.9} 
                        rippleDuration={2000} 
                        rippleSize= {500}>
                    <Text style= {styles.text} textAlign='center'>Press Me </Text>
                </Ripple>
            </View>
            
            <Button
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Asthma</Text>
            </Button>
            </View>
            <View style={styles.screen}>
            <Button
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 40,
                marginLeft: 10}}>
                <Text color={theme.colors.text} textAlign='center'>Sick</Text>
            </Button>

            <Button
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Nurse</Text>
            </Button>

            </View>

            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.0} color={"lightgreen"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('pqOnePageTwo')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
        </Background>
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    screen:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 24,
        
    },
    header: {
        position: 'absolute',
        top: 20 + getStatusBarHeight(),
        fontSize: 21,
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        alignItems: 'center',
        padding: 20,
        resizeMode: 'contain',
        borderRadius: 30
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 26,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    imagePlacement: {
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 4,
      },

    body: {
        flex: 1,
        backgroundColor: '#daeaf6',
        width: 150,
        height: 60,
        borderWidth: 5,
        borderRadius: 15,
        borderColor: '#0a2941',
        marginRight: 10


      },

    button: {
        width:300,
        height: 50,
        marginVertical: 10,
        paddingVertical: 2
      },
})