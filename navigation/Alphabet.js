import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Button from '../components/Button';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function Alphabet({navigation}){
    const {colors} = useTheme();
    const[url, setUrl ] = useState();

    return(
        <Background>
            <TouchableOpacity  onPress = { () => navigation.replace('Home')} style={styles.iconContainer}>
                <List.Icon icon="arrow-left" />
            </TouchableOpacity>
             <View style = {{flexDirection: 'row'}}>
                
                <Header>Emergency</Header>
            </View>
            
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                    }}>
                    </Image>
                    <Text>A</Text>
                </View>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/b.png?alt=media&token=4e42d531-dbcb-4a04-b209-da5f51b18015'
                    }}>
                    </Image>
                    <Text>B</Text>
                </View>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/c.png?alt=media&token=3605cb26-7e7b-4fd8-8f62-2703f88b0819'
                    }}>
                    </Image>
                    <Text>C</Text>
                </View>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/a.png?alt=media&token=86dc2271-6d76-49be-860c-1f016f0b4e3b'
                    }}>
                    </Image>
                    <Text>A</Text>
                </View>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/b.png?alt=media&token=4e42d531-dbcb-4a04-b209-da5f51b18015'
                    }}>
                    </Image>
                    <Text>B</Text>
                </View>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/c.png?alt=media&token=3605cb26-7e7b-4fd8-8f62-2703f88b0819'
                    }}>
                    </Image>
                    <Text>C</Text>
                </View>
            </View>
            <View style = {{marginLeft: 20}}>
                <Text style={[styles.text, {color: colors.text, marginLeft: 30}]}> Lesson Progress: 50%</Text>
                <ProgressBar style = {{marginLeft: 30, marginRight: 30}} progress={0.5} color={"blue"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('RegisterScreen')}
            style = {{backgroundColor: '#ecddfc'}}
            >
                Next Section
            </Button>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row'
    },
    image: {
        width: 115,
        height: 115,
        resizeMode: 'contain',
        borderRadius: 30,
        margin: 10,

    },
    text: {
        marginTop: 15,
        fontSize: 15,
    },
    imagePlacement: {
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 4,
      },
})