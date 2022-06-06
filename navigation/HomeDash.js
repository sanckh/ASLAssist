import React, {useState} from 'react';
import { SafeAreaView, Text, Button, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';


// function circle(){
//     const buttonClickedHandler = () => {
//         console.log('Button has been clicked');
//         // this is placeholder insert code to take user to the selected lesson

//     };
//     return (
//         <View style = {styles.screen}>
//             <TouchableOpacity
//             onPress = {buttonClickedHandler}style={styles.circleButton}>
//                 <Text>Emergency</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }


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
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>Home Dashboard</Text> */}
            <View style = {styles.screen}>
            <TouchableOpacity
            onPress = {onPress} style={styles.circleButton}>
                <Text>Emergency</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={onPress} style={styles.rectangleButton}>
                <Text color='#414141'>Lesson 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onPress} style={styles.rectangleButton}>
                <Text color='#414141'>Lesson 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onPress} style={styles.rectangleButton}>
                <Text color='#414141'>Lesson 3</Text>
            </TouchableOpacity>

        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 40,
    },
    rectangleButton:{
        width: 100,
        height: 50,
        backgroundColor:'#fce1e4',
        borderColor:'#57131b',
        borderRadius: 15,
        borderWidth: 5,
        marginBottom: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default HomeDash;