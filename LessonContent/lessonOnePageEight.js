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
            <TouchableOpacity  onPress = { () => navigation.replace('lessonOnePageSeven')} style={styles.iconContainer}>
                <List.Icon icon="arrow-left" />
            </TouchableOpacity>
             <Header style = {styles.header}>Section Eight</Header>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Fwhale.gif?alt=media&token=c3070e27-5220-4ffb-ab4b-f3ad644e5ab1'
                    }}>
                    </Image>
                    <Text>Make a Y-shaped hand by extending the pinky and thumb and tuck the remaining fingers into the palm. Hold this hand bent at the elbow and forearm straight up. Bring the other hand up and hold it parallel to the body. Wave the Y-shaped hand up and down in a wavy motion.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Fwolf.gif?alt=media&token=5498eb51-53ec-41ff-9bf5-cd15849d2a22'
                    }}>
                    </Image>
                    <Text>Wolf is signed by holding your open, dominant hand a short distance in front of your nose. As you pull your hand back, all the fingers touch, as if emphasizing the long snout of a wolf.</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.66}
                color={"lightgreen"} alignItems={"center"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonOnePageNine')}
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