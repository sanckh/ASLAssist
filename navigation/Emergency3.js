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
            <Header style={styles.header}>Emergency</Header>
            <View style={styles.container}>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fnurse.gif?alt=media&token=b9cd3a11-f1c1-4069-a375-58be07ec0020'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Your index and middle fingers forming the ASL letter 'N' on your dominant hand, holding your hand with hand taps against the wrist.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Frunnynose.gif?alt=media&token=76e31df7-bf64-4390-a78b-83eecf2cfcb5'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> The sign for runny nose you put your fingers next to your nose.</Text>
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fsick.gif?alt=media&token=23359471-8da2-482e-9fa2-805f5cf7b8cb'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Make a face that conveys illness, and point to your forehead with your dominant hand and to your tummy with your hand</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fsorethroat.gif?alt=media&token=fa9ab187-784a-44c3-ba5c-093a266f8644'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}> To do the sign "pain" near your throat.</Text>
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fweakness.gif?alt=media&token=64e61ff3-a454-4ad2-88fe-9907c701c139'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Places the fingertips of hand on the palm of the non-dominant hand and then bends the knuckles twice. </Text>
                            </View>
                        </GestureFlipView>
                    </View>
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('Home')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Go To Lessons
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

