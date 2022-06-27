import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function LessonTwo({navigation}){
    const {colors} = useTheme();
    const[url, setUrl ] = useState();


    return(
        <ScrollView style={styles.scrollView}>
            <BackButton goBack = {navigation.goBack} />
            <View style = {styles.header}>
                <Header>Alphabet</Header>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>The letter A is signed by holding up your dominant hand in a fist, facing outward, with the thumb sticking up to the side of the fist.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fb.png?alt=media&token=e3472f2b-98e3-48f5-aede-32f449840cb0'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>The letter B is signed by holding up your dominant hand open, with palm facing out and all 4 fingers standing straight and kept together, while tucking your thumb into your palm.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fc.png?alt=media&token=5ef5bcf9-cfae-4dfd-9d41-737817761fca'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>The letter C is signed by curving your open, dominant hand just like the letter 'C', where the top 4 fingers held together make up the top curve, and the thumb makes up the bottom curve.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fd.png?alt=media&token=a9915327-f253-4850-8dd6-f914b87bddf5'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>The letter D is signed by holding up your dominant hand, curving your middle, ring, and pinkie fingers together and touching them to your thumb, while only your index finger is standing upright.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Alphabet%2Fe.png?alt=media&token=62801ac5-fa49-4162-b9f6-744c654d944f'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
                <View style = {styles.text}>
                <Text>Touch your nose and then sign "OPPOSITE." Do most of the movement with your dominant hand. The non-dominant hand doesn't move much.</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#123456', alignItems: 'center', justifyContent:'center'}}>
            <Image style={{height: 200, width: 200}}
             source={{uri: url}} />
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