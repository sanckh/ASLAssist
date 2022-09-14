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
             <Header style = {styles.header}>Holidays</Header>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Fveterans.gif?alt=media&token=dcf50a72-d9f0-4658-9bed-2a0d1daf04b5'
                    }}>
                    </Image>
                    <Text>Veteran's Day.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonTwo%2Fwomensequalityday.gif?alt=media&token=21a4dd02-5c04-4cd7-886b-feab0244a91b'
                    }}>
                    </Image>
                    <Text>Women's Equality Day.</Text>
                </View>
                
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonTwoPageTen')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.45} color={"lightgreen"}/>
                    <Text style={{alignSelf:"center",position:"absolute"}}>45%</Text>
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