import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List, Divider } from 'react-native-paper';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { theme, CustomDefaultTheme, CustomDarkTheme } from '../core/theme';

export default function PracticeOne({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            
            {/* <Header style = {styles.header}>Pratice Quiz</Header> */}
            {/* lesson content */}
            <Icon name="medal" size={200} color={'purple'}/>

            <Text color={theme.colors.text}
                style = {styles.text}>Congratulations</Text>
                <Paragraph>You have completed the quiz</Paragraph>
            <Text color={theme.colors.text}
            style = {{fontSize: 20}}>EXP   15+</Text>
            {/* <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.0} color={"lightgreen"} />
            </View> */}
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('HomeDash')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Go To Lessons
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
        width: 115,
        height: 115,
        resizeMode: 'contain',
        borderRadius: 30,
        margin: 10,
    },
    text: {
        marginTop: 15,
        fontSize: 15,
        fontSize: 26,
        fontWeight: 'bold'
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