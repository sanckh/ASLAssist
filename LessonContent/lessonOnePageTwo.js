import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Button from '../components/Button';
import Background from '../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function LessonOnePageTwo({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <TouchableOpacity  onPress = { () => navigation.replace('LessonOne')} style={styles.iconContainer}>
                <List.Icon icon="arrow-left" />
            </TouchableOpacity>
            <Header style = {styles.header}>Section Two</Header>
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement} marginTop={0}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Fduck.gif?alt=media&token=6f05ab56-2819-4fc3-95d4-3863ecc0f8a9'
                    }}>
                    </Image>
                    <Text>taking your index and middle fingers together and touching them to and separating them from your thumb, holding them in front of your mouth</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonOne%2Felephant.gif?alt=media&token=7a6dd1e4-7c8f-4e47-ad94-fd72c482ec89'
                    }}>
                    </Image>
                    <Text>uses a flat hand to show the trunk. Start near your nose and then move downward and outward</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.34}
                color={"lightgreen"} alignItems={"center"} />
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
        width: 200,
        height: 100,
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