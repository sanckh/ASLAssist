import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
//import storage from '@react-native-firebase/storage';
import { theme } from '../core/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Background from '../components/Background';
import GestureFlipView from 'react-native-gesture-flip-card';
import Button from '../components/Button';
import HomeButton from '../components/HomeButton'

export default function LessonOne({ navigation }) {

    //for dark mode
    const { colors } = useTheme();

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <HomeButton onPress = {() => navigation.navigate('Home')}/>
            <Header style={styles.header}>Emergency</Header>
            <View style={styles.container}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Femergency.gif?alt=media&token=a4815808-9bab-408a-a98c-b6693c482753'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> Take your dominant hand, form it into the ASL letter E sign, and shake it from side to side. </Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Ffever.gif?alt=media&token=046f04d4-5be7-4431-b176-26b8b10387a3'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Slide the right index finger up and down the side of the left index finger. The dominant hand is in a palm-down "index finger" handshape.</Text>
                            </View>
                        </GestureFlipView>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fheadache.gif?alt=media&token=189109bd-e99d-4847-afd9-aaf7b1d346e2'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>A hurt sign near your forehead. </Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fheartattack.gif?alt=media&token=b82584ec-43ba-4710-a15c-560c3baf7586'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Touches heart with the middle finger and then forms a fist and strike the palm of non-dominant loose-hand.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fhospital.gif?alt=media&token=1cfbb7d9-d18a-4214-80bd-bd21d76451fe'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> Form the ASL 'H' sign, then you'll make the sign of a cross on your opposite arm, starting vertically, up down.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fhurry.gif?alt=media&token=74593331-c378-4899-959b-0e81f8d585d2'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> Holding both 'H' hands in front of your body, pivot them up and down.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                    
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('Emergency3')}
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
        paddingTop: 70
    },
    header: {
        position: 'absolute',
        top: 20 + getStatusBarHeight(),
        fontSize: 21,
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 150,
        height: 90,
        resizeMode: 'contain',
    },
    text: {
        flex: 1,
        width: 140,
        textAlign: 'center'
    },
    scrollview: {
        flex: 1,
    },
    imagePlacement: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    frontCardStyle: {

    },
    backCardStyle: {
        backgroundColor: 'black',
        height: 90,
        width: 150,
        backgroundColor: 'rgba(180, 180, 180, 0.5)',
        borderWidth: 1,
        //borderColor: 'rgba(180, 180, 180, 1)'
    },
    gestureView: {
        marginLeft: 10,
        marginRight: 10
    }
})






