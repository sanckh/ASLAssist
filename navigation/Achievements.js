import { Text, Pressable, FlatList, View, SafeAreaView, ScrollView, StyleSheet, Alert, Linking,} from 'react-native';
import React, {Component, useCallback, useEffect, useState} from 'react';
import { List, Divider, TouchableRipple } from 'react-native-paper';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { getAdditionalUserInfo } from 'firebase/auth';
import { deleteDoc, doc, getDoc, setDoc, docs, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import {db} from '../firebase'
import IonIcon from 'react-native-vector-icons/Ionicons'
import {getAch} from './getAchievements'

export default function Achievement({navigation}){
  return(
    <ScrollView>
      <SafeAreaView style={styles.container}>
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

            <List.Item title = "Consistency"
            left = {() => <List.Icon icon="trophy" />}
            description = "Logged in 7 days in a row"
            />
            <List.Item title = "Getting Started"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed Lesson One"
            />
            <List.Item title = "Baby Steps"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed three lessons"
            />
            <List.Item title = "Scholar"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed Lesson One Quiz"
            />
            <List.Item title = "Genius"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed three quizzes"
            />
            <List.Item title = "Practice Makes Perfect"
            left = {() => <List.Icon icon="trophy" />}
            description = "Completed one Practice Quiz"
            />

          </List.Section>
          </View>
        </View>
      </SafeAreaView>
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
    container:{
      flex: 1,
      marginBottom: 40
    },
    innerContainer:{
      alignItems: 'center',
      flexDirection: 'column',
      marginLeft: 45
    },
    itemHeading:{
      fontWeight: 'bold',
      fontSize: 24,
      marginRight: 22
    },
    icon:{
      marginTop: 5,
      fontSize: 20,
      marginLeft: 14
    }
  });


