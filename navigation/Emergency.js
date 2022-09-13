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


export default function LessonOne({ navigation }) {

    //for dark mode
    const { colors } = useTheme();

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Header style={styles.header}>Emergency</Header>
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
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
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
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
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
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
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
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

                        <GestureFlipView width={180} height={90}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fmedicine.gif?alt=media&token=c704865d-6a62-40c6-a0a4-4bc7b291cdae'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Hold your hand with palm facing up, middle finger of your dominant hand in the center of your palm, and make a twisting motion</Text>
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