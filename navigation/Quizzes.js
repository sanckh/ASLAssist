import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Alert, TouchableOpacity, View, ScrollView} from 'react-native';
import Header from '../components/Header';

const QuizDash = (props) => {
    const buttonClickedHandler = () => {
        console.log('Button will take user to selected quiz');
        // this is placeholder insert code to take user to the selected lesson

    };
    const buttonClickedAlert = () => {
        Alert.alert('Button will take user to selected quiz');
    };
    const onPress = () => {
        buttonClickedHandler();
        buttonClickedAlert();
    };
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <View style = {styles.header}>
                <Header>Quizzes</Header>
            </View>
            <View style = {styles.screen}>
                <TouchableOpacity
                onPress={onPress} style={styles.rectangleButton}>
                    <Text color='#414141'>Practice Quiz 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={onPress} style={styles.rectangleButton}>
                    <Text color='#414141'>Practice Quiz 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={onPress} style={styles.rectangleButton}>
                    <Text color='#414141'>Practice Quiz 3</Text>
                </TouchableOpacity>

                <Text color='#414141'
                style = {styles.text}>Previous Tests</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    text:{
        fontSize: 26,
        fontWeight: 'bold'
    },
    rectangleButton:{
        width: 150,
        height: 50,
        backgroundColor:'#daeaf6',
        borderColor:'#0a2941',
        borderRadius: 15,
        borderWidth: 5,
        marginBottom: 24,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
export default QuizDash;