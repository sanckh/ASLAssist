import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';

export default function LessonFive({navigation}){
    const {colors} = useTheme();

    return(
        <View>
            <BackButton goBack = {navigation.goBack} />
            <View style = {styles.header}>
                <Header>Lesson 2</Header>
            </View>
            {/* <View>
                <Text style = {{color: colors.text}}> hello this is a test</Text>
            </View> */}
        </View>
        
        
    )
}


