import React from 'react';
import { SafeAreaView, View, StyleSheet, Component, Text, Image} from 'react-native';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { TouchableRipple, Switch, useTheme, Divider } from 'react-native-paper';
import {AuthContext} from '../components/context'

import {List} from 'react-native-paper'
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';

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
            <Text style={{fontSize: 24, marginBottom: 20}}>{counter}</Text>
            <Button onPress={()=>{setCounter(counter+15)}} 
            style={{backgroundColor: '#ddedea',
                    width: 150,
                    height: 60,
                    borderColor: '#093f35',
                    borderWidth: 5,
            }}
            title="Increase EX">EX Points</Button>
            <List.Section
              borderColor= 'black'
            >
              <List.Subheader>Recent Achievements</List.Subheader>
              <List.Item title = "Achievement placeholder"
              //make aa check mark for completed
              left = {() => <List.Icon icon="check-decagram" />}
              />

            </List.Section>
            <Divider/>
            <List.Section>
              <List.Subheader>Upcoming Achievements</List.Subheader>
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
