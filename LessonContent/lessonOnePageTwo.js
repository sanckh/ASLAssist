import { Text, View, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Button from '../components/Button';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function LessonSix({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <TouchableOpacity  onPress = { () => navigation.replace('LessonOne')} style={styles.iconContainer}>
                <List.Icon icon="arrow-left" />
            </TouchableOpacity>
            <Header style = {styles.header}>Section Two</Header>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.34}
                color={"darkgreen"} alignItems={"center"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonOnePageThree')}
            style = {{backgroundColor: '#ecddfc', 
                width: 250,
                height: 50,}}
            >
                Next Section
            </Button>
        </Background>
        
    )
}

// const styles = StyleSheet.create({
//     header: {
//         marginTop: 20,
//         marginLeft: 40,
//         padding: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     text:{
//         alignContent: 'center'
//     }
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