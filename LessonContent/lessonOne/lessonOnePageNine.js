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
            <BackButton goBack = {navigation.goBack} />
            <HomeButton onPress = {() => navigation.navigate('Home')}/>
             <Header style = {styles.header}>Colors</Header>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Fblack.gif?alt=media&token=5a896643-38d1-4815-a542-f28c54a30164'
                    }}>
                    </Image>
                    <Text>Taking your index finger and drawing it across your brow once, while the rest of your hand is drawn into a loose fist.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Fblue.gif?alt=media&token=3e7eef89-24b9-414d-9aef-3738e02bc537'
                    }}>
                    </Image>
                    <Text>The blue sign is made by making the ASL letter B sign out by the side of your body. Take your fingers outstretched with your thumb tucked under. Then twist your hand left and right out by the side of your body.</Text>
                </View>
                
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonOnePageTen')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.65} color={"lightgreen"}/>
                    <Text style={{alignSelf:"center",position:"absolute"}}>65%</Text>
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