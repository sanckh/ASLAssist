import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function LessonOne(){
    return(
        <View style = {styles.header}>
                <Header>Numbers</Header>
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