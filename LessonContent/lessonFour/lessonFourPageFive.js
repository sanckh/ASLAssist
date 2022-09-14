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
            
            <Header style = {styles.header}>Section Five</Header>
            {/* lesson content */}
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Feveryweek.gif?alt=media&token=1a2c9a6a-9769-46ea-b243-5354a3032115'
                    }}>
                    </Image>
                    <Text>Take your right index finger and swipe it across your left palm.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Ffebruary.gif?alt=media&token=f1af592f-6762-4930-8761-a8c70c462256'
                    }}>
                    </Image>
                    <Text>Fingerspell F-E-B.</Text>
                </View>
                
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonFourPageSix')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.28} color={"lightgreen"}/>
                    <Text style={{alignSelf:"center",position:"absolute"}}>28%</Text>
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