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
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <GestureFlipView width={125} height={125}>
                            <View>
                                <View style={styles.imagePlacement}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fa.png?alt=media&token=27eade2d-cb80-46e0-a910-b818cd2a1906'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fb.png?alt=media&token=aa6d3d6e-382a-41ac-b2fb-36312c24e527'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fc.png?alt=media&token=7375e29d-6d71-44b8-bf6d-b8454a960112'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fd.png?alt=media&token=3d229a22-7516-4e64-8ca6-cb079a6e24ef'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fe.png?alt=media&token=430eb2e8-8c92-424a-be41-5354265175bc'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Ff.png?alt=media&token=16b21d38-c00a-44ca-b7cc-24db035e7c8b'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fg.png?alt=media&token=69b8fdf1-6759-44fe-8c95-dd2ad702277d'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fh.png?alt=media&token=ea89dcf7-d1bf-4490-82b5-99d1cf1f8a9d'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fi.png?alt=media&token=086316c3-d05b-44fe-9550-f35410e2c11e'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fj.png?alt=media&token=5b68c7aa-a13d-4c14-a1ad-2f551e88dddf'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fk.png?alt=media&token=f71128b0-7669-4ec0-8e6b-baf8ba96ac72'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fl.png?alt=media&token=15859a30-c78c-481b-bfd6-89df3176b30d'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fm.png?alt=media&token=f8c1ac95-038c-4400-9c79-7ff789c7c3ac'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fn.png?alt=media&token=a7f52984-c2bc-4067-8972-efcdbd9083f2'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fo.png?alt=media&token=0af6b6fe-2d9b-4024-ba89-8c465ef5ce2b'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fp.png?alt=media&token=2f1fa1eb-e322-4d19-b6de-bff18c70daa4'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fq.png?alt=media&token=e14e12b1-7c20-4f19-a12e-ce6c37fb71fb'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fr.png?alt=media&token=ada743ba-5724-4128-8372-74f4d4c27e36'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fs.png?alt=media&token=15762dd6-d167-40c0-b663-ae99d8bee0b4'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Ft.png?alt=media&token=4f6fca60-9b81-4747-99ff-504c927a7fc0'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fu.png?alt=media&token=94f6169c-b0d4-4212-9714-8f86df28634e'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fv.png?alt=media&token=dcbd9d96-bde3-49f3-829d-96054c4781ee'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fw.png?alt=media&token=57f49684-552d-4ef3-8dfd-60764e8dfea8'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fx.png?alt=media&token=db845573-6c57-4398-b1da-fdcc664a5919'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fy.png?alt=media&token=87476ca3-235c-4308-8b2c-95862d04f1f2'
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
                                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/ResizedAlphabet%2Fz.png?alt=media&token=89424906-0217-46eb-affb-14c2af37a7e4'
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
    }

})