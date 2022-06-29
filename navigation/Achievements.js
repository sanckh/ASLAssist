import { Text, View, SafeAreaView, ScrollView, StyleSheet, Alert, Linking,} from 'react-native';
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
import { deleteDoc, doc, getDoc, setDoc, docs, collection, getDocs } from 'firebase/firestore';
//import { getAch } from './getAchievements';
import {db} from '../firebase'

export default function Achievement({navigation}){

    // Storing User Data
    const [userDoc, setUserDoc] = useState(null)
    const [userCon, setCon] = useState(null)
    const [userStart, setStart] = useState(null)
    const [userSteps, setSteps] = useState(null)
    const [userScholar, setScholar] = useState(null)
    const [userGenius, setGenius] = useState(null)

//READ 
      const Practice = () => {
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
      const Consistency = () => {
        const colRef = doc(db, 'Achievements', 'wbkc520AlzDjgo9O8fVb')

        getDoc(colRef)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setCon(snapshot.data())
              let achieve = []
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
      const GettingStarted = () => {
        const colRef = doc(db, 'Achievements', 'AT8209EgNPmecgIRB0RP')

        getDoc(colRef)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setStart(snapshot.data())
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
      const BabySteps = () => {
        const colRef = doc(db, 'Achievements', 'ukd0vvvhXbVpS9tBnCCo')

        getDoc(colRef)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setSteps(snapshot.data())
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
      const Scholar = () => {
        const colRef = doc(db, 'Achievements', 'h10u6WysxLYAmCjFsRCG')

        getDoc(colRef)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setScholar(snapshot.data())
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
      const Genius = () => {
        const colRef = doc(db, 'Achievements', 'w8CmP5HTpIoeTHHvhsSp')

        getDoc(colRef)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setGenius(snapshot.data())
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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <BackButton goBack = {navigation.goBack} />
          <View style = {styles.header}>
              <Header>Achievements</Header>
              </View>
          <Button title='Read Doc' onPress={Consistency} style={styles.buttons}>Achievements</Button>
          {
            userCon != null &&
            <List.Item title= {userCon.title}
            left= {()=><List.Icon icon="trophy"/>}
            description= {userCon.description}/>
          }
          <Button title='Read Doc' onPress={GettingStarted} style={styles.buttons}>Achievements</Button>
          {
            userStart != null &&
            <List.Item title= {userStart.title}
            left= {()=><List.Icon icon="trophy"/>}
            description= {userStart.description}/>
          }
          <Button title='Read Doc' onPress={BabySteps} style={styles.buttons}>Achievements</Button>
          {
            userSteps != null &&
            <List.Item title= {userSteps.title}
            left= {()=><List.Icon icon="trophy"/>}
            description= {userSteps.description}/>
          }
          <Button title='Read Doc' onPress={Scholar} style={styles.buttons}>Achievements</Button>
          {
            userScholar != null &&
            <List.Item title= {userScholar.title}
            left= {()=><List.Icon icon="trophy"/>}
            description= {userScholar.description}/>
          }
          <Button title='Read Doc' onPress={Genius} style={styles.buttons}>Achievements</Button>
          {
            userGenius != null &&
            <List.Item title= {userGenius.title}
            left= {()=><List.Icon icon="trophy"/>}
            description= {userGenius.description}/>
          }
          <Button title='Read Doc' onPress={Practice} style={styles.buttons}>Achievements</Button>
          {
            userDoc != null &&
            <List.Item title= {userDoc.title}
            left= {()=><List.Icon icon="trophy"/>}
            description= {userDoc.description}/>
          }
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
    }
  });


