import { Text, View, ScrollView, StyleSheet, Alert, Linking, FlatList } from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import { List, Divider, TouchableRipple } from 'react-native-paper';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { getAdditionalUserInfo } from 'firebase/auth';
import { deleteDoc, doc, getDoc, setDoc, docs, collection } from 'firebase/firestore';import { getAchievements } from './getAchievements';
import {db} from '../firebase'

export default function Achievement({navigation}){

    // Storing User Data
    const [userDoc, setUserDoc] = useState(null)

  // const getAchievements = () => {
  //   //code to call firestore achievements master list
  // }
  // const [ach, setAch] = useState()

  // useEffect(()=>{
  //   getData()
  // })

  // function getData(){
  //   getAchievements(achRet)
  // }
  // function achRet(ach){
  //   setAch(ach)
  // }

  
//READ 
      const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        //top colref is for all achievements, bottom reads one at a time
        //const colRef = collection(db, 'Achievements')
        const colRef = doc(db, 'Achievements', 'GNJ4nawtVzv8uT7pIJLH')
    
        getDoc(colRef)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setUserDoc(snapshot.data())
              let achieve = []
              // snapshot.docs.forEach((doc) => {
              //   achieve.push({...docs.data(), id: doc.id})
              // })
            }
            else {
              alert("No Doc Found")
            }
          })
          .catch((error) => {
            // MARK: Failure
            alert(error.message)
          })
    
      }

  return(
    <View>
      <Button title='Read Doc' onPress={Read}>Read</Button>
      {
        userDoc != null &&
        <Text>Title: {userDoc.title}</Text>
      }
      {
        userDoc != null &&
        <Text>Description: {userDoc.description}</Text>
      }
      {/* <FlatList style ={styles.flatlist}
      data = {ach}
      iD = {(item)=>item.id}
      renderItem={({item})=><List.Item item = {item}
      left = {()=> <List.Icon icon ="trophy"/>}
      />}
      /> */}
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
  });


