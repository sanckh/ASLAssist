import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Button from '../components/Button';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function LessonTwo({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <BackButton goBack ={navigation.goBack}/>
             <Header style = {styles.header}>Section Seven</Header>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Fpressured.gif?alt=media&token=d389ce43-b8c7-4e5c-948b-ab2b861d8caa'
                    }}>
                    </Image>
                    <Text>To sign "pressure," use the dominant 5-hand (or flat hand) to press the weak S-hand downward twice.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Frelieved.gif?alt=media&token=df3c1bc3-2bc5-4cce-bb14-9f948aa214ab'
                    }}>
                    </Image>
                    <Text>palm-down flat hands one above the other held to your torso and then moved downward</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.0} color={"lightgreen"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonTwoPageEight')}
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
    header: {
        position: 'absolute',
        top: 20 + getStatusBarHeight(),
        fontSize: 21,
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 30,
        margin: 10,

    },
    text: {
        marginTop: 15,
        fontSize: 15,
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
})