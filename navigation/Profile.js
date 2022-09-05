import React from 'react';
import { SafeAreaView, View, StyleSheet, Component, Text, Image} from 'react-native';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { TouchableRipple, Switch, useTheme, Divider } from 'react-native-paper';
import {AuthContext} from '../components/context'
import { auth } from '../firebase';
import {List} from 'react-native-paper'
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

// const Profile = (props) => {
//     return (
//         <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text>Profile</Text>
//         </SafeAreaView>
//     )
// }

export default function Profile({navigation}){
    const {toggleTheme} = React.useContext(AuthContext);
    const paperTheme = useTheme();

    const[counter, setCounter]= React.useState(0)

    return (
        <View>
            <View style = {styles.header}>
            <Header>Profile</Header>
            </View>
          <View>
          <Icon name="user-astronaut" size={150} color={'navy'} style={styles.iconStyle}/>
          <View>
                <Text style={{fontSize: 24, padding: 20}}>Hello {auth.currentUser?.email}</Text>
            </View>
            
            <Divider/>
            <List.Section>
              <List.Subheader>Achievements</List.Subheader>
              <TouchableRipple
                onPress={() => navigation.navigate('Achievements')}
                >
              <List.Item title = "View All Achievements" 
              left = {() => <List.Icon icon="check-decagram-outline" />} 
              description = "" 
              />
              </TouchableRipple>
            </List.Section>
            <Divider/>
          </View>
        </View>
      );
    }

  const styles = StyleSheet.create({
    imageStyle:{
      marginLeft:15,
      marginRight:20,
      alignSelf:'center',
      width:20,
      height:24,
      justifyContent:'center'
    },
    header:{
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconStyle: {
      alignSelf: 'center', 
      padding: 5, 
      marginRight: 10
    }
  });
