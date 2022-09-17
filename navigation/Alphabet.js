import { Text, View, ScrollView, StyleSheet, Image, StatusBar, Button } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React from 'react';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'

import GestureFlipView from 'react-native-gesture-flip-card';

export default function Alphabet({ navigation }) {

    //for dark mode
    const { colors } = useTheme();

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Header style={styles.header}>Alphabet</Header>
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View>
                        <Text style = {styles.topText}>Swipe the cards to view the sign's description!</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fa.png?alt=media&token=7d566f73-4cbf-445e-b905-e8c63a89061d'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Hold your hand in a fist, facing outward, with your thumb along the side.</Text>
                            </View>
                        </GestureFlipView>

                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fb.png?alt=media&token=fecf3e14-97d6-4fbd-8422-163b2361816f'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Hold your hand open and tuck your thumb.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fc.png?alt=media&token=e9205556-8f91-423d-8b57-c5ee0491319c'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Curve your hand like the letter 'C'.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fd.png?alt=media&token=a011336d-3fcd-417c-9003-1f10aaa3ae79'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Hold up your dominant hand, pointing your index finger.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                        
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fe.png?alt=media&token=0f386832-3ce7-4aef-99de-13253ebd12f5'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Make a fist while tucking your thumb under your fingers.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Ff.png?alt=media&token=cc134f45-f07e-4f72-b44b-b4e79a7c722d'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>Palm facing out, index finger and thumb forming a circle, while your other fingers are straight.</Text>
                            </View>
                        </GestureFlipView>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fg.png?alt=media&token=a3e50c2a-9ee6-45e5-b708-cf99bac5d156'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter G is signed by holding out your dominant hand in a fist, with knuckles lined up vertically. Keep your middle, ring, and pinkie fingers curled in, while your index finger and thumb stick out parallel to each other.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fh.png?alt=media&token=c8b8999c-3577-4b2c-9976-00c6fb60f59c'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter H is signed by holding out your dominant hand horizontally, palm facing in, with your index and middle fingers held out together, straight and stacked horizontally, index at the top. The rest of the fingers and thumb are curled in.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fi.png?alt=media&token=02c23a8d-9220-4532-ba52-0b9853c859b2'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter I is signed by holding up your dominant hand in a fist, palm facing out, with only your pinkie finger sticking up straight.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fj.png?alt=media&token=bda090c2-7c1a-4206-abd4-8f2deeec4b9a'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter J is signed by holding up your dominant hand, palm facing out, with your fingers curled into a fist except your pinkie sticking out. Then make a 'J' in the air with your pinkie finger, starting from the top of the 'J' stem down and curving up again to form the bottom part of the letter.</Text>
                            </View>
                        </GestureFlipView>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fk.png?alt=media&token=5d65b684-64ea-478d-94e5-3e2c6bb7fd46'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter K is signed by holding up your dominant hand, palm facing out, with your index and middle fingers sticking up like the letter 'V' (or like the common "peace" sign), while your thumb is tucked at the base of the two extended fingers. Your two remaining fingers are curled in, touching your palm.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fl.png?alt=media&token=1f8a29bd-e407-4984-ab3f-18248ed79ab1'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter L is signed by holding up your dominant hand, palm facing out, with your thumb and index finger sticking out at a right angle to each other, while the last 3 fingers are curled in.</Text>
                            </View>
                        </GestureFlipView>

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fm.png?alt=media&token=743c6c35-11bf-4187-a81f-41c859ec28b8'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter M is signed by holding up your dominant hand, palm facing out, with all your fingers curled into your palm. Then tuck your thumb between your ring and pinkie fingers. This sign looks like the small letter 'm', with the 3 fingers' bumps reminding us of the letter written in cursive.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fn.png?alt=media&token=db9e86f7-0931-4185-b646-49719ab3cf9a'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter N is signed by holding up your dominant hand, palm facing out, with all your fingers curled into your palm. Then tuck your thumb between your middle and ring fingers. This sign looks like the small letter 'n', with the 2 fingers' bumps reminding us of the letter written in cursive.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fo.png?alt=media&token=042406f2-4bb6-40de-9ebe-28277b163413'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter O is signed by curving all your fingers and touching them to your thumb, making the shape of the letter 'O' with your entire hand.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fp.png?alt=media&token=867de42b-f3a3-4015-9fd5-62e6cd4646c6'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter P is signed like K, but the former is held upside down. Hold down your dominant hand, palm facing in, with your index and middle fingers sticking out like an inverted letter 'V', while your thumb is tucked in between the two extended fingers. Your two remaining fingers are curled in, touching your palm.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fq.png?alt=media&token=e2c64b14-7230-4735-8de9-76a53101590a'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter Q is signed by holding down your dominant hand, palm facing in, with your with knuckles lined up horizontally. Keep your middle, ring, and pinkie fingers curled in, while your index finger and thumb stick out parallel to each other, like two legs of a person standing up.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fr.png?alt=media&token=a9443c4d-a93d-4fcb-a515-3dbc604d678b'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter R is signed by holding up your dominant hand, palm facing out, with your index and middle fingers intertwined like vines. The rest of your fingers and thumb are curled in. This looks just like the small letter 'r'.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fs.png?alt=media&token=9fac9d43-6576-46f0-9b2f-e8c2b3e67a94'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter S is signed by holding up your dominant hand into a fist, palm facing out. Make sure your thumb is tucked in front of your fingers. Otherwise, you might sign the letter A by mistake.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Ft.png?alt=media&token=31834b68-d5b8-4004-be79-90cfc08d0f97'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter T is signed by holding up your dominant hand into a fist, palm facing out, and your thumb tucked in between your index and middle fingers.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fu.png?alt=media&token=ea41fee4-aa4c-4750-b5d2-1d5e8d4a4d3b'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter U is signed by holding up your dominant hand in a fist, facing outward, with the index and middle fingers sticking up while held together.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fv.png?alt=media&token=077c078e-f609-48be-bbb9-b01b6d040ba2'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter V is signed by holding up your dominant hand in a fist, facing outward, with the index and middle fingers sticking out and spread apart. It looks just like the letter 'V'.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fw.png?alt=media&token=fe5363d1-0fd5-463c-a79a-08b5f249cba0'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter W is signed by holding up your dominant hand in a fist, palm facing out, with your index, middle, and ring fingers sticking out. This looks just like the letter 'W'</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fx.png?alt=media&token=ed289943-bb19-4f43-a373-3e3cfdd41c15'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter X is signed by holding up your dominant hand in a fist, palm facing out. Then stick out your index finger and bend it into a hook.</Text>
                            </View>
                        </GestureFlipView>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 15 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fy.png?alt=media&token=85def17b-fdbb-4792-8944-0fc3426729df'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter Y is signed by holding up your dominant hand, palm facing out, with your thumb and pinkie finger sticking out and the rest of your fingers curled in.</Text>
                            </View>
                        </GestureFlipView>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2FNEWALPHABET%2Fz.png?alt=media&token=c33ea5d6-ba4a-4c9e-bdd8-dd954589671d'
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.backCardStyle}>
                                <Text style={[styles.text, { color: colors.text }]}>The letter Z is signed by holding up the index finger of your dominant hand, palm facing out with the rest of the fingers drawn into a fist, and tracing the letter 'Z' with your index in the air.</Text>
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
        paddingTop: 70,
        flex: 1
    },
    header: {
        position: 'absolute',
        top: 20 + getStatusBarHeight(),
        fontSize: 21,
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 125,
        height: 125,
        resizeMode: 'contain',
    },
    text: {
        flex: 1,
        width: 110,
        textAlign: 'left',
        paddingLeft: 5
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
        height: 125,
        width: 115,
        backgroundColor: 'rgba(180, 180, 180, 0.5)',
        borderWidth: 1,
        //borderColor: 'rgba(180, 180, 180, 1)'
    },
    topText: {
        textAlign: 'center'
    }

})