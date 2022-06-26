import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, Alert, TouchableOpacity, View, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { theme } from '../core/theme';
import LessonButton from '../components/Button';
import Button from '../components/Button';
import { useTheme } from '@react-navigation/native';
import { auth } from '../firebase';



export default function HomeDash({navigation}) {

    //for dark mode
    const {colors} = useTheme();

    //FOR TESTING PURPOSES
    // const buttonClickedHandler = () => {
    //     console.log('Button has been clicked');
    //     // this is placeholder insert code to take user to the selected lesson
    // };
    // const buttonClickedAlert = () => {
    //     Alert.alert('Button has been clicked');
    // };
    // const onPress = () => {
    //     buttonClickedHandler();
    //     buttonClickedAlert();
    // };

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style = {styles.header}>
                <Header justifyContent='center'
                 alignItems='center'>Home</Header>
            </View>
            <View>
                <Text>Hello {auth.currentUser?.email}</Text>
            </View>
            <View style = {styles.screen}>
            
            <TouchableOpacity 
            style={styles.circleButton}
            onPress = {() => navigation.navigate('Emergency')}>
                <Text textAlign='center' color={theme.colors.text}>Emergency</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.circleButton}
            onPress = {() => navigation.navigate('Alphabet')}>
                <Text textAlign='center' color={theme.colors.text}>  Alphabet</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.circleButton}
            onPress = {() => navigation.navigate('Numbers')}>
                <Text textAlign='center' color={theme.colors.text}>  Numbers</Text>
            </TouchableOpacity>
        </View>
        <View>
        {/* <LessonButton style={styles.test}
            mode = "contained"
            onPress = {onPress}
            //additional styling
            >
                Lesson 1
        </LessonButton> */}

        <View style={styles.screen}>
            <TouchableOpacity
            onPress={() => navigation.navigate('LessonOne')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('LessonTwo')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 2</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.screen}>
            <TouchableOpacity
            onPress={() => navigation.navigate('LessonThree')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 3</Text>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonFour')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 4</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.screen}>
            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonFive')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonSix')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 6</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.screen}>
            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonSeven')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 7</Text>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonEight')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 8</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.screen}>
            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonNine')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 9</Text>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress={() => navigation.navigate('LessonTen')}
            style={styles.rectangleButton}>
                <Text color={theme.colors.text} textAlign='center'>Lesson 10</Text>
            </TouchableOpacity>

            </View>

        </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    screen:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 24
    },
    circleButton:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#daeaf6',
        borderColor: '#0a2941',
        borderWidth: 5,
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 24,
        marginHorizontal: 10
    },
    rectangleButton:{
        width: 150,
        height: 50,
        backgroundColor:'#fce1e4',
        borderColor:'#57131b',
        borderRadius: 15,
        borderWidth: 5,
        marginBottom: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    header: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    // test: {
    //     backgroundColor:'#fce1e4',
    //     borderColor:'#57131b',
    //     borderRadius: 15,
    //     borderWidth: 5,
    //     width: 100,
    //     height: 50,
    //     marginBottom: 24,
    //     padding: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginLeft: 20,
    // }
})

