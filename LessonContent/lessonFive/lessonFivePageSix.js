import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useTheme } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, List } from 'react-native-paper';
import Background from '../../components/Background';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Button from '../../components/Button';
import HomeButton from '../../components/HomeButton';

export default function LessonSix({navigation}){
    const {colors} = useTheme();

    return(
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <HomeButton onPress = {() => navigation.navigate('Home')} />
            <Header style = {styles.header}>Lesson Five</Header>
            {/* lesson content */}
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFive%2Fpregnant.gif?alt=media&token=a9ec60ff-4058-480c-b95c-5355921540fe'
                    }}>
                    </Image>
                    <Text>Hand showing belly</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View style = {styles.imagePlacement}>
                    <Image
                    style = {styles.image}
                    source = {{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/LessonFive%2Fpropose.gif?alt=media&token=bda8f4ce-3bb4-40b2-bc20-0e6de27873fb'
                    }}>
                    </Image>
                    <Text>Both hands out as if giving a ring</Text>
                </View>
                
            </View>
            <View>
                <ProgressBar style = {{width: 200, marginTop: 15}} progress={0.0} color={"lightgreen"} />
            </View>
            <Button
            mode = "contained"
            onPress = {() => navigation.navigate('lessonFivePageSeven')}
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