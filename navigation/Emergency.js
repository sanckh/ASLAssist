import { Text, View, Image, StyleSheet } from 'react-native';
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

    // useEffect(() =>
    // {
    //     const func = async() => 
    //     {
    //         const storage= getStorage();
    //         const reference= ref(storage, '/a.png');
    //         await getDownloadURL(reference).then((x) =>
    //         {
    //             setUrl(x);
            
    //         })
    //     }
    //         func();
    // }, []);

    return(
        <View>
            <BackButton goBack = {navigation.goBack} />
            <View style = {styles.header}>
                <Header>Emergency</Header>
            </View>
            <View>
                <Text style={[styles.text, {color: colors.text}]}> hello this is a sample image with text</Text>
            </View>
            <View>
                <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                }}>

                </Image>
            </View>
            <View style={{flex: 1, backgroundColor: '#123456', alignItems: 'center', justifyContent:'center'}}>
            <Image style={{height: '70%', width: '70%'}}
             source={{uri: url}} />
            </View>
            
        </View>
        
        
    )
   
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginLeft: 40,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 30
    },
    text: {
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 20,
    },
})