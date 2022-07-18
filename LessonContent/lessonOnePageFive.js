import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Button from '../components/Button';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'


export default function LessonSix({navigation}){
    const {colors} = useTheme();

    return(
        <SafeAreaView style={styles.container}>
        <Background>
            <TouchableOpacity  onPress = { () => 
                navigation.replace('lessonOnePageFour')} style={styles.iconContainer}>
                <List.Icon icon="arrow-left" />
            </TouchableOpacity>
            <Header style = {styles.header}>Section Five</Header>
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement} marginTop={30}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Flizard.gif?alt=media&token=f261219a-dd63-44d5-acee-49545d0ca038'
                    }}>
                    </Image>
                    <Text>Start with one hand with the elbow near your waist, arm extended straight out. With your other hand, make an L-shape (extend the pointer finger up and the thumb out, tuck the remaining fingers into your palm). “Run” the L-shaped hand up from about your wrist to the crook of your elbow.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Fowl.gif?alt=media&token=90bdcb12-782c-4ef8-ab23-f3449fd6dc6e'
                    }}>
                    </Image>
                    <Text>To sign owl, make your hands into circles and hold them up in front of your eyes. Twist your hands inward and outward.</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.66}
                color={"lightgreen"} alignItems={"center"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonOnePageSix')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
            
        </Background>
        </SafeAreaView>
        
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
        paddingTop: 24
    },
    text: {
        marginTop: 15,
        fontSize: 15,
    },
    imagePlacement: {
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 4,
      },
})