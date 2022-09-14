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
            <HomeButton onPress = {() => navigation.navigate('Home')}/>
            
            <Header style = {styles.header}>Section Sixteen</Header>
            {/* lesson content */}
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Ftent.gif?alt=media&token=2c56ef52-b434-49a7-bb7d-4fe986b4d59f'
                    }}>
                    </Image>
                    <Text>Use our pinkie and index fingers on both hands, have them meet at the center, and pull them apart on a downward slant.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Ftoday.gif?alt=media&token=86b470a5-58de-406f-a939-36ce6ac57996'
                    }}>
                    </Image>
                    <Text>Form both hands into the ASL letter Y sign, with your thumb and pinkie fingers extended and your three middle fingers curled in on each hand.</Text>
                </View>
                
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonFourPageSeventeen')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.94} color={"lightgreen"}/>
                    <Text style={{alignSelf:"center",position:"absolute"}}>94%</Text>
            </View>
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