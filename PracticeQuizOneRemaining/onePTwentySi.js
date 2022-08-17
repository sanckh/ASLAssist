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

export default function PracticeOne({navigation}){
    const {colors} = useTheme();

    const wrongAnswer = () => {
        Alert.alert('This answer is incorrect. \nPlease try again');
    };

    return(
        <Background>
            <TouchableOpacity  onPress = { () => navigation.replace('Home')} style={styles.iconContainer}>
                <List.Icon icon="home-outline" />
            </TouchableOpacity>
            
            <Header style = {styles.header}>Pratice Quiz</Header>
            {/* lesson content */}
            <Image
                style = {styles.image}
                source = {{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/PracticeQuizOneBlurredImages%2Ffastfoodquiz.gif?alt=media&token=f47c593b-a828-4828-beae-e92eb380e039'
                }}>
                </Image>
                <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.0} color={"lightgreen"} />
                </View>
                <Text style={styles.text}>What sign is this?</Text>
                <View style={styles.screen}>
            <Button
            onPress={()=> navigation.navigate('onePTwentySe')}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 250,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 40,
                marginLeft: 10}}>
                <Text color={theme.colors.text} textAlign='center'>Fast Food</Text>
            </Button>
            </View>
            <View style={styles.screen}>
            <Button
            onPress={()=> wrongAnswer()}
            mode = "contained"
            style = {{backgroundColor: '#daeaf6', 
                width: 250,
                height: 60,
                borderWidth: 5,
                borderRadius: 15,
                borderColor: '#0a2941',
                marginRight: 10,}}>
                <Text color={theme.colors.text} textAlign='center'>Restaurant</Text>
            </Button>

            </View>

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
        marginBottom: 24
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