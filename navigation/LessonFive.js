import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function LessonFive(){
    return(
        <View style = {styles.header}>
                <Header>Lesson 2</Header>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})