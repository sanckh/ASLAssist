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
            
            <Header style = {styles.header}>Section Twelve</Header>
            {/* lesson content */}
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Fmoney.gif?alt=media&token=ea8c5d08-bb74-45dd-a11d-0abae075f4ab'
                    }}>
                    </Image>
                    <Text>A flattened "O" (as if holding onto some money) and smacks it (lightly) twice onto the palm of the base hand.</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFour%2Fmonthly.gif?alt=media&token=d50d469e-96d8-43fc-9e09-5f3f77e39b99'
                    }}>
                    </Image>
                    <Text>Trace the right index finger from the top to the bottom of the left index finger.</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.34} color={"lightgreen"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonFourPageThirteen')}
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