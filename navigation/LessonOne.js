import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';

export default function LessonOne(){

    //for dark mode
    const {colors} = useTheme();

    return(
        <View>
            <View style = {styles.header}>
                <Header>Emergency</Header>
            </View>
            <View>
                <Text style = {{color: colors.text}}> hello this is a test</Text>
            </View>
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