import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Button from '../../components/Button';
import Background from '../../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import HomeButton from '../../components/HomeButton';

export default function LessonTwo({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <HomeButton onPress = {() => navigation.navigate('Home')}/>
             <Header style = {styles.header}>Section Two</Header>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Ffourthofjuly.gif?alt=media&token=63f73d38-f282-4c46-89a8-526bd1542ef9'
                    }}>
                    </Image>
                    <Text>Fourth Of July.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Fgroundhogday.gif?alt=media&token=ba2ae1d4-d8a9-4336-b067-b9a2307217e9'
                    }}>
                    </Image>
                    <Text>GroundHog Day.</Text>
                </View>
                
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonTwoPageTwelve')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.55} color={"lightgreen"}/>
                    <Text style={{alignSelf:"center",position:"absolute"}}>55%</Text>
            </View>
            
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