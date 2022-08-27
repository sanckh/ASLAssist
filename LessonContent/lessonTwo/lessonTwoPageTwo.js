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
            <BackButton goBack = {navigation.goBack}/>
            <HomeButton onPress = {() => navigation.navigate('Home')} />
             <Header style = {styles.header}>Section Two</Header>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Fcalm.gif?alt=media&token=83561b06-8d9f-479a-b8e0-f4d5c0610ad2'
                    }}>
                    </Image>
                    <Text> Both "5" hands, palms facing down in space, slowly move downward a bit once</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Fembrassed.gif?alt=media&token=ad2cdf69-5f4e-4c5d-8e13-49fcd190e098'
                    }}>
                    </Image>
                    <Text>alternate moving your hands upward alongside your head as if showing the blood rushing up into your face</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.0} color={"lightgreen"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonTwoPageThree')}
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