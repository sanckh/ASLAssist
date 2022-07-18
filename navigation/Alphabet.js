import { Text, View, ScrollView, StyleSheet, Image, StatusBar } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, {useState} from 'react';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function Alphabet({navigation}){

    //for dark mode
    const {colors} = useTheme();

    return(
        <Background>
            <BackButton goBack = {navigation.goBack} />
            <Header style = {styles.header}>Alphabet</Header>
            <View style = {styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter A is signed by holding up your dominant hand in a fist, facing outward, with the thumb sticking up to the side of the fist.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fb.png?alt=media&token=e3472f2b-98e3-48f5-aede-32f449840cb0'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter B is signed by holding up your dominant hand open, with palm facing out and all 4 fingers standing straight and kept together, while tucking your thumb into your palm.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fc.png?alt=media&token=5ef5bcf9-cfae-4dfd-9d41-737817761fca'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter C is signed by curving your open, dominant hand just like the letter 'C', where the top 4 fingers held together make up the top curve, and the thumb makes up the bottom curve.</Text>
                        </View>
                    </View>

                    <View  style = {{flexDirection: 'row', marginTop: 10}}>
                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fd.png?alt=media&token=a9915327-f253-4850-8dd6-f914b87bddf5'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter D is signed by holding up your dominant hand, curving your middle, ring, and pinkie fingers together and touching them to your thumb, while only your index finger is standing upright.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fe.png?alt=media&token=62801ac5-fa49-4162-b9f6-744c654d944f'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter E is signed by holding up your dominant hand, palm facing out, with your top 4 fingers all touching each other and tightly curved in, while your thumb is also curved and tightly tucked into your palm, touching the tips of the fingers above. This looks just like the small letter 'e'.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Ff.png?alt=media&token=d4e6729b-9844-4222-88d8-d053de1d104f'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter F is signed by holding up your dominant hand, palm facing out, with your index finger and thumb touching, while your 3 other fingers are held up and spread apart. Make sure to form a circle with your thumb and index finger touching.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fg.png?alt=media&token=ff0777e0-55f0-4101-a650-8e32d2152775'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter G is signed by holding out your dominant hand in a fist, with knuckles lined up vertically. Keep your middle, ring, and pinkie fingers curled in, while your index finger and thumb stick out parallel to each other.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fh.png?alt=media&token=c41292eb-e438-4798-a1a9-58f3dbe703ad'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter H is signed by holding out your dominant hand horizontally, palm facing in, with your index and middle fingers held out together, straight and stacked horizontally, index at the top. The rest of the fingers and thumb are curled in.</Text>
                        </View>
                        
                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fi.png?alt=media&token=09dbb669-d645-4659-9092-e362c6e8b968'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter I is signed by holding up your dominant hand in a fist, palm facing out, with only your pinkie finger sticking up straight.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fj.png?alt=media&token=6df6a6b5-21ba-41a0-af41-9f367f3f12b0'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter J is signed by holding up your dominant hand, palm facing out, with your fingers curled into a fist except your pinkie sticking out. Then make a 'J' in the air with your pinkie finger, starting from the top of the 'J' stem down and curving up again to form the bottom part of the letter.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fk.png?alt=media&token=6748c83b-14fb-408d-a3e4-5510271e94c9'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter K is signed by holding up your dominant hand, palm facing out, with your index and middle fingers sticking up like the letter 'V' (or like the common "peace" sign), while your thumb is tucked at the base of the two extended fingers. Your two remaining fingers are curled in, touching your palm.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fl.png?alt=media&token=f2fe106c-9301-4e71-b158-23ef9e9a4e00'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter L is signed by holding up your dominant hand, palm facing out, with your thumb and index finger sticking out at a right angle to each other, while the last 3 fingers are curled in.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fm.png?alt=media&token=e864039d-0ce8-4cc3-a9b8-fb0c8dd3837b'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter M is signed by holding up your dominant hand, palm facing out, with all your fingers curled into your palm. Then tuck your thumb between your ring and pinkie fingers. This sign looks like the small letter 'm', with the 3 fingers' bumps reminding us of the letter written in cursive.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fn.png?alt=media&token=fc974e46-9f0a-4bd8-8116-a1d9d46e4632'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter N is signed by holding up your dominant hand, palm facing out, with all your fingers curled into your palm. Then tuck your thumb between your middle and ring fingers. This sign looks like the small letter 'n', with the 2 fingers' bumps reminding us of the letter written in cursive.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fo.png?alt=media&token=21565247-8183-4698-a0a8-709da9034901'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter O is signed by curving all your fingers and touching them to your thumb, making the shape of the letter 'O' with your entire hand.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fp.png?alt=media&token=55422cca-5903-4920-b689-b53f30422dd0'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter P is signed like K, but the former is held upside down. Hold down your dominant hand, palm facing in, with your index and middle fingers sticking out like an inverted letter 'V', while your thumb is tucked in between the two extended fingers. Your two remaining fingers are curled in, touching your palm.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fq.png?alt=media&token=1a8c7d14-cef6-4458-bbec-8c242097553a'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter Q is signed by holding down your dominant hand, palm facing in, with your with knuckles lined up horizontally. Keep your middle, ring, and pinkie fingers curled in, while your index finger and thumb stick out parallel to each other, like two legs of a person standing up.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fr.png?alt=media&token=7458feb8-5436-4a0e-92a2-04a03eb4b600'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter R is signed by holding up your dominant hand, palm facing out, with your index and middle fingers intertwined like vines. The rest of your fingers and thumb are curled in. This looks just like the small letter 'r'.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fs.png?alt=media&token=bd3d59bd-2ef8-4086-b26d-46b1d760a7fd'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter S is signed by holding up your dominant hand into a fist, palm facing out. Make sure your thumb is tucked in front of your fingers. Otherwise, you might sign the letter A by mistake.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Ft.png?alt=media&token=e18f2370-26f3-424b-b155-741b7b4f6f27'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter T is signed by holding up your dominant hand into a fist, palm facing out, and your thumb tucked in between your index and middle fingers.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fu.png?alt=media&token=5e469b3f-5765-4cca-aad0-72941faa20b6'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter U is signed by holding up your dominant hand in a fist, facing outward, with the index and middle fingers sticking up while held together.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fv.png?alt=media&token=431c0a51-1f96-446e-8f44-cb5cc4782e88'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter V is signed by holding up your dominant hand in a fist, facing outward, with the index and middle fingers sticking out and spread apart. It looks just like the letter 'V'.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fw.png?alt=media&token=51a7747c-a628-45f2-b53e-f88e84346d57'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter W is signed by holding up your dominant hand in a fist, palm facing out, with your index, middle, and ring fingers sticking out. This looks just like the letter 'W'</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fx.png?alt=media&token=29977d31-7e97-47fe-85f0-6d5ffae334d8'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter X is signed by holding up your dominant hand in a fist, palm facing out. Then stick out your index finger and bend it into a hook.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fy.png?alt=media&token=09ed6ae7-08cc-4c42-b2da-b27cad4a846f'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter Y is signed by holding up your dominant hand, palm facing out, with your thumb and pinkie finger sticking out and the rest of your fingers curled in.</Text>
                        </View>

                        <View style = {styles.imagePlacement}>
                            <Image
                            style = {styles.image}
                            source = {{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fz.png?alt=media&token=5f9eac76-197f-48fe-9010-5294426568f2'
                            }}>
                            </Image>
                            <Text style = {[styles.text, {color: colors.text}]}>The letter Z is signed by holding up the index finger of your dominant hand, palm facing out with the rest of the fingers drawn into a fist, and tracing the letter 'Z' with your index in the air.</Text>              
                        </View>
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
        width: 85,
        height: 85,
        resizeMode: 'contain',
        margin: 10,
    },
    text: {
        flex:1,
        width: 110,
        textAlign: 'center'
    },
    scrollview: {
        flex: 1,
    },
    imagePlacement: {
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})