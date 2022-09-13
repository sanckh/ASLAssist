import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Button from '../components/Button';
import { theme } from '../core/theme';
import HomeButton from '../components/HomeButton'

export default function PracticeOne({navigation}){
    const {colors} = useTheme();

    const wrongAnswer = () => {
        Alert.alert('This answer is incorrect. \nPlease try again');
    };

    return(
        <Background>
            <BackButton goBack = {navigation.goBack} />
            <HomeButton onPress = {() => navigation.navigate('Home')}/>
            
            <Header style = {styles.header}>Pratice Quiz</Header>
            {/* lesson content */}
            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonThreeQuizBlurredImages%2Fthunder-blurred.gif?alt=media&token=71b5c26d-37f3-4184-89e5-5e1f87236cb3'
                }}>
                </Image>
                
                <Text style={styles.text}>What sign is this?</Text>
                <View style={styles.screen}>
            <Button
            onPress={()=> navigation.navigate('eight')}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 40,
                marginLeft: 10}}>
                <Text color={theme.colors.text} textAlign='center'>Thunder</Text>
            </Button>

            <Button
            onPress = {() => wrongAnswer()}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Bull</Text>
            </Button>
            </View>
            <View style={styles.screen}>
            <Button
            onPress={()=> navigation.navigate('two')}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 40,
                marginLeft: 10}}>
                <Text color={theme.colors.text} textAlign='center'>Ringing</Text>
            </Button>

            <Button
            onPress={()=> wrongAnswer()}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Ear ache</Text>
            </Button>

            </View>

            <View>
                <ProgressBar style={{ width: 200, marginTop: 50 }} progress={0.0} color={"lightgreen"} />
            </View>

        </Background>
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    screen:{
        
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    header: {
        position: 'absolute',
        top: 20 + getStatusBarHeight(),
        fontSize: 21,
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 300,
        height: 150,
        marginTop: 0,
        marginBottom:50,
        alignItems: 'center',
        //padding: 20,
        resizeMode: 'contain',
        
    },
    text: {
        // marginTop: 15,
        fontSize: 25,
    },
    imagePlacement: {
        top: 0
    },
    textSpacing: {
        fontSize: 25,
        marginBottom: 20
        //add more props here
    }
    
})