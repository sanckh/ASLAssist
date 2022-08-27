import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Background from '../../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Button from '../../components/Button';
import HomeButton from '../../components/HomeButton';

export default function LessonSix({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <HomeButton onPress = {() => navigation.navigate('Home')} />
            <Header style = {styles.header}>Section Ten</Header>
            {/* lesson content */}
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Flate.gif?alt=media&token=72d515c8-65e5-4cc5-90ba-61688b067169'
                    }}>
                    </Image>
                    <Text>Negative headshake and covers the lower teeth with the tongue.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Flifevest.gif?alt=media&token=2d54021d-fa32-4f26-80a8-207106bac2f3'
                    }}>
                    </Image>
                    <Text>Take both thumbs and swipe then up your torso then hold your hands as if you are holding a vest and swipe your hands down.</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.34} color={"lightgreen"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonFourPageEleven')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
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
        position: 'absolute',
        top: 20 + getStatusBarHeight(),
        fontSize: 21,
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 200,
        height: 100,
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