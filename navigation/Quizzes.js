import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Alert, TouchableOpacity, View, ScrollView} from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import { theme, CustomDefaultTheme, CustomDarkTheme } from '../core/theme';
const QuizDash = (props) => {

    const {colors} = useTheme();

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
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <Header>
                    Quizzes
                </Header>
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
                    <Text style = {{color: colors.text}}>Practice Quiz 3</Text>
                </TouchableOpacity>

                <Text style = {{fontSize: 26, color: colors.text}}>Previous Tests</Text>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    rectangleButton:{
        width: 200,
        height: 50,
        backgroundColor: theme.colors.card,
        borderColor:'#0a2941',
        borderRadius: 15,
        borderWidth: 5,
        marginBottom: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default QuizDash;