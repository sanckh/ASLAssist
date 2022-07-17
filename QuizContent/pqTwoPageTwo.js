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

export default function LessonSix({navigation}){
    const {colors} = useTheme();

    const wrongAnswer = () => {
        Alert.alert('This answer is incorrect. \nPlease try again');
    };
    
    return(
        <Background>
            <BackButton goBack = {navigation.goBack} />
            
            <Header style = {styles.header}>Practice Quiz</Header>
            {/* lesson content */}
            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Ftiger.gif?alt=media&token=470f1e34-74f1-4429-acae-5659a972d18c'
                }}>
                </Image>
                <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.34} color={"lightgreen"} />
                </View>
                <Text style={styles.text}>What sign is this?</Text>
                <View style={styles.screen}>
            <Button
            onPress = {() => navigation.navigate('pqTwoPageThree')}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 40,
                marginLeft: 10}}>
                <Text color={theme.colors.text} textAlign='center'>Tiger</Text>
            </Button>

            <Button
            onPress={()=>wrongAnswer()}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Shark</Text>
            </Button>
            </View>
            <View style={styles.screen}>
            <Button
            onPress={()=>wrongAnswer()}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 40,
                marginLeft: 10}}>
                <Text color={theme.colors.text} textAlign='center'>Blue</Text>
            </Button>

            <Button
            onPress={()=>wrongAnswer()}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 150,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Gold</Text>
            </Button>

            </View>
            {/* <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.34} color={"lightgreen"} />
            </View> */}
            {/* <Button
            mode = "contained"
            onPress = {() => navigation.navigate('pqTwoPageThree')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button> */}
        </Background>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    screen:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 24,
        
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
        // marginTop: 15,
        fontSize: 25,
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