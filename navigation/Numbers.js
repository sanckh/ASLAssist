import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Background from '../components/Background';
import GestureFlipView from 'react-native-gesture-flip-card';

export default function LessonThree({ navigation }) {
    const { colors } = useTheme();
    const [url, setUrl] = useState();

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Header style={styles.header}>Numbers</Header>
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F0.png?alt=media&token=6ef91b82-a002-4fcd-bf22-be77141c8383'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The sign for "zero" shows an "O" handshape and moves it forward with a firm stop.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F1.png?alt=media&token=f61e110e-ff10-4340-8ed8-8d65a9e7eec1'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 1 is signed by holding hand in fist, facing towards you, with your index finger sticking out.</Text>
                            </View>
                        </GestureFlipView>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F2.png?alt=media&token=a2a15a03-b934-4b26-b888-d9bec1b599ff'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 2 is signed by holding hand in fist, facing towards you, with your index and middle fingers sticking out.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F3.png?alt=media&token=b0fcd366-48a5-4c49-a55a-57c9749bd0ec'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 3 is signed by holding hand in fist, facing towards you, then sticking out your thumb, index and middle fingers.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F4.png?alt=media&token=bb9a9e0c-9fd1-44e6-91a6-302394e17ef8'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 4 is signed by holding hand in fist, facing towards you, sticking out your four fingers spread apart while your thumb is tucked in.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F5.png?alt=media&token=a5388e8b-2d98-4e1a-8b10-af39349c92f2'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 5 is signed by holding up your dominant hand, facing towards you, and sticking out all your 5 fingers.</Text>
                            </View>
                        </GestureFlipView>

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F6.png?alt=media&token=4d37c6e3-d92b-4fc4-80bb-ad747a44b54e'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>To make the number 6, open your hand and touch your thumb to your pinky finger.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F7.png?alt=media&token=5c55ee48-1d0c-4821-a421-849b5e184730'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>To make the number 7 in sign language, touch your thumb to the finger next to your pinky finger.</Text>
                            </View>
                        </GestureFlipView>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F8.png?alt=media&token=7ffef462-b39f-4ed9-9276-5d6cc6fb5e6a'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 8 is signed by holding up your open, dominant hand, facing out, then touching your thumb and middle finger together.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F9.png?alt=media&token=703e2d76-1a2c-4ef0-8819-4eb8fb36801f'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 9 is signed by holding up hand facing out, touching your thumb and index finger together.</Text>
                            </View>
                        </GestureFlipView>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={170} height={160}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Numbers%2F10.png?alt=media&token=63392b0f-4c41-4490-bef7-5c83670c2f0a'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The number 10 is signed by holding hand in fist, with thumb sticking up, twisting hand at the wrist back and forth.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                </ScrollView>
            </View>
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
        height: 150,
        resizeMode: 'contain',
        margin: 10,
    },
    text: {
        flex: 1,
        width: 150,
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
    backCardStyle: {
        backgroundColor: 'black',
        height: 150,
        width: 150,
        backgroundColor: 'rgba(180, 180, 180, 0.5)',
        borderWidth: 1,
        //borderColor: 'rgba(180, 180, 180, 1)'
    },
})