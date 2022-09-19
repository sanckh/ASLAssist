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
import Button from '../components/Button'
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
                <View>
                        <Text style = {styles.topText}>Swipe the cards to view the sign's description!</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fallergic.gif?alt=media&token=6723bda9-594a-42da-be85-5dcabef23689'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fblind.gif?alt=media&token=9e352d1b-9133-437b-afba-facdae156841'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Fingers of dominant claw-2 handshape tap once or twice on the inner cheeks with the nose between the fingers.</Text>
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fburn.gif?alt=media&token=d2506a0a-52c3-436e-b586-166f815ca88a'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Stretch out and wiggle your fingers like the flickering flames of a fire. Form ASL number 5 sign, with your fingers wiggling back and forth.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fcontagious.gif?alt=media&token=35e5730d-5488-4a4b-b880-9c879e562827'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> Holding up an "I" hand and moving it side to side a couple of inches while using a somewhat disgusted facial expression.</Text>
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fcough.gif?alt=media&token=e6788617-d491-401e-be88-2ced2169e3f8'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> Hit your chest with the thumb-side of your fist a couple times.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fdeaf.gif?alt=media&token=69595c68-a261-4c38-b8a0-ea1c81734b83'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Touch your finger on your cheek near your ear, then move your finger in a small arch and touch it near the mouth.</Text>
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fdoctor.gif?alt=media&token=be182104-f713-4b1f-81dd-b4a85f256166'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Take your hand, curve it, and touch it to the inner wrist of your non-dominant hand, like you are taking a pulse.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('Emergency2')}
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
    },
    topText: {
        textAlign: 'center'
    }
})