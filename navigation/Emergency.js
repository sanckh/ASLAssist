import { Text, View, Image, StyleSheet, ScrollView  } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, {useState, useEffect} from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
//import storage from '@react-native-firebase/storage';
import { theme } from '../core/theme';

export default function LessonOne({navigation})
{
    const[url, setUrl ] = useState();

    //for dark mode
    const {colors} = useTheme();

    return(
        <ScrollView style={styles.scrollView}>
            <BackButton goBack = {navigation.goBack} />
            <View style = {styles.header}>
                <Header>Emergency</Header>
            </View>
            <View style = {styles.text}>
                <Text> Here are some important phrases to learn when learning ASL. </Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fallergic.gif?alt=media&token=6723bda9-594a-42da-be85-5dcabef23689'
                }}>

                </Image>

                <View style = {styles.text}/>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>

                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fasthma.gif?alt=media&token=96305886-e903-4dc5-80f2-26dd59454955'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Place your hands about an inch out from your chest and then move your hands downward, repeat.</Text>
            </View>
            
            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fblind.gif?alt=media&token=9e352d1b-9133-437b-afba-facdae156841'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Fingers of dominant claw-2 handshape tap once or twice on the inner cheeks with the nose between the fingers.</Text>
            </View>

                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fburn.gif?alt=media&token=d2506a0a-52c3-436e-b586-166f815ca88a'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>To sign fire, you stretch out and wiggle your fingers like the flickering flames of a fire. Form both hands in the open, ASL number 5 sign, with your fingers wiggling back and forth. Then cycle your hand up and down in vertical circles.</Text>
            </View>

                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fcontagious.gif?alt=media&token=35e5730d-5488-4a4b-b880-9c879e562827'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text> holding up an "I" hand and moving it side to side a couple of inches while using a somewhat disgusted facial expression.</Text>
            </View>

                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fcough.gif?alt=media&token=e6788617-d491-401e-be88-2ced2169e3f8'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text> hit your chest with the thumb-side of your fist a couple times.</Text>
            </View>

                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fdeaf.gif?alt=media&token=69595c68-a261-4c38-b8a0-ea1c81734b83'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Touch your finger on your cheek near your ear, then move your finger in a small arch and touch it near the mouth.</Text>
            </View>

                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fdoctor.gif?alt=media&token=be182104-f713-4b1f-81dd-b4a85f256166'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>take your strong hand, curve it, and touch it to the inner wrist of your non-dominant hand, like you are taking a pulse.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Femergency.gif?alt=media&token=a4815808-9bab-408a-a98c-b6693c482753'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text> take your dominant hand, form it into the ASL letter E sign, and shake it from side to side. </Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Ffever.gif?alt=media&token=046f04d4-5be7-4431-b176-26b8b10387a3'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Slide the right index finger up and down the side of the left index finger. The dominant hand is in a palm-down "index finger" handshape.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fheadache.gif?alt=media&token=189109bd-e99d-4847-afd9-aaf7b1d346e2'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>a hurt sign near your forehead. </Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fheartattack.gif?alt=media&token=b82584ec-43ba-4710-a15c-560c3baf7586'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>touches the heart with the middle finger and then forms a fist and strike the palm of the non-dominant loose-hand.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fhospital.gif?alt=media&token=1cfbb7d9-d18a-4214-80bd-bd21d76451fe'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text> your dominant hand will form the ASL 'H' sign, then you'll make the sign of a cross on your opposite arm, starting vertically, up down, then horizontally, left to right, as if rubbing the opposite upper arm after just having received a shot.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fhurry.gif?alt=media&token=74593331-c378-4899-959b-0e81f8d585d2'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Hurry is signed by first taking both hands and forming the ASL sign for letter 'H'. Holding both 'H' hands in front of your body, pivot them up and down, as if you are a traffic cop signaling someone to hurry up.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fmedicine.gif?alt=media&token=c704865d-6a62-40c6-a0a4-4bc7b291cdae'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Medicine is signed by holding your non-dominant hand with palm facing up. Now place then middle finger of your dominant hand in the center of your non-dominant palm, and make a twisting motion with the former, as if you're crushing a tablet or pill on your palm</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fnurse.gif?alt=media&token=b9cd3a11-f1c1-4069-a375-58be07ec0020'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>Sign nurse by taking your pulse with your index and middle fingers forming the ASL letter 'N' on your dominant hand, and holding your non-dominant hand with wrist up as your dominant hand taps against the wrist.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Frunnynose.gif?alt=media&token=76e31df7-bf64-4390-a78b-83eecf2cfcb5'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text> the sign for runny nose you put your fingers next to your nose.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fsick.gif?alt=media&token=23359471-8da2-482e-9fa2-805f5cf7b8cb'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>To sign sick, make a face that conveys illness, and point to your forehead with your dominant hand and to your tummy with your non-dominant hand. Use the middle finger of each open hand with fingers splayed out, when you point to your forehead and tummy at the same time</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fsorethroat.gif?alt=media&token=fa9ab187-784a-44c3-ba5c-093a266f8644'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text> to do the sign "pain" near your throat.</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fweakness.gif?alt=media&token=64e61ff3-a454-4ad2-88fe-9907c701c139'
                }}>

                </Image>

                <View style = {styles.text}>
                <Text>The sign for "weak" places the fingertips of the dominant hand on the palm of the non-dominant hand and then bends the knuckles twice. </Text>
            </View>
            
        </ScrollView>
        
        
    )
   
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        alignItems: 'center',
        padding: 20,
        resizeMode: 'contain',
        borderRadius: 30
    },
    text: {
        //marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 50,
        marginRight: 50,
        
        
    },
})