import { Text, View, ScrollView, StyleSheet, Alert, Linking } from 'react-native';
import React, {useCallback} from 'react';
import { List, Divider, TouchableRipple } from 'react-native-paper';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

export default function Achievement({navigation}){

  const getAchievements = () => {
    //code to call firestore achievements master list
  }
    return(
        <View style = {styles.containerView}>
          <BackButton goBack = {navigation.goBack} />
          <View>
          <Logo/>
          <Header>Achievements</Header>
          
          <View style = {styles.header}>
            <Header>Profile</Header>
          </View>

        </View>
            <View>
              {/* display getAchievements */}
            </View>

            <View>
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
            </List.Section>
            <Divider/>
          </View>

          </View>
    )
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
    },
    containerView: {
      flex: 1,
      padding: 10,
      width: '100%',
      maxWidth: 1000,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
