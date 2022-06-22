import { Text, View, ScrollView, StyleSheet, Alert, Linking } from 'react-native';
import React, {useCallback} from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

import {List} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';

export default function Achievement({navigation}){
    return(
      <ScrollView>
      <View>
        <BackButton goBack = {navigation.goBack} />
          <View style = {styles.header}>
          <Header>Achievements</Header>
          </View>
        <View>
          <List.Section
            borderColor= 'black'
          >
            <List.Subheader>All Achievements</List.Subheader>
            <List.Item title = "Placeholder: Consistency"
            left = {() => <List.Icon icon="trophy" />}
            description = "Logged in 7 days in a row"
            />
            <List.Item title = "Placeholder: Getting Started"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed Lesson One"
            />
            <List.Item title = "Placeholder: Baby Steps"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed three lessons"
            />
            <List.Item title = "Placeholder: Scholar"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed Lesson One Quiz"
            />
            <List.Item title = "Placeholder: Genius"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed three quizzes"
            />
            <List.Item title = "Placeholder: Practice Makes Perfect"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed one Practice Quiz"
            />
            <List.Item title = "Placeholder"
            left = {() => <List.Icon icon="trophy" />}
            description = "Placeholder"
            />
            <List.Item title = "Placeholder"
            left = {() => <List.Icon icon="trophy" />}
            description = "Placeholder"
            />

          </List.Section>
    </View>
  </View>
  </ScrollView>
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
    header: {
      marginTop: 20,
      marginLeft: 40,
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
