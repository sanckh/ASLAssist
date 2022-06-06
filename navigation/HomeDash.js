import React, {useState} from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Alert, TouchableOpacity, View, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const HomeDash = (props) => {
    const buttonClickedHandler = () => {
        console.log('Button has been clicked');
        // this is placeholder insert code to take user to the selected lesson
    };
    const buttonClickedAlert = () => {
        Alert.alert('Button has been clicked');
        // placeholder to let the apk user know they have pressed the button
    }
    const onPress = () => {
        buttonClickedAlert();
        buttonClickedHandler();
    };
    const buttonClickedAlert = () => {
        Alert.alert('Button has been clicked');
    };
    const onPress = () => {
        buttonClickedHandler();
        buttonClickedAlert();
    };
    return (
        <ScrollView>
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>Home Dashboard</Text> */}
            <View style = {styles.screen}>
            
            <TouchableOpacity
            onPress = {onPress}style={styles.circleButton}>
                <Text textAlign='center'>Emergency</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {onPress}style={styles.circleButton}>
                <Text textAlign='center'>  Alphabet</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {onPress}style={styles.circleButton}>
                <Text textAlign='center'>  Numbers</Text>
            </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
            onPress={onPress} style={styles.rectangleButton}>
                <Text color='#414141' textAlign='center'>Lesson 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onPress} style={styles.rectangleButton}>
                <Text color='#414141' textAlign='center'>Lesson 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onPress} style={styles.rectangleButton}>
                <Text color='#414141' textAlign='center'>Lesson 3</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'space-around',
        // alignItems: 'center',
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
        color: '#414141',
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 24,
        marginHorizontal: 10
    },
    rectangleButton:{
        width: 100,
        height: 50,
        backgroundColor:'#fce1e4',
        borderColor:'#57131b',
        borderRadius: 15,
        borderWidth: 5,
        marginBottom: 24,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default HomeDash;