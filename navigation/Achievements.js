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

class AchList extends Component{
  state = {
    achList: [],
    currentItem: null
  }
  onRecieved = (achList)=>{
      console.log(achList);
      this.setState(prevState => ({
        achList: prevState.achList = achList
      }));
  }
  componentDidMount(){
    getAch(this.onRecieved);
  }

  render() {
    return(
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <BackButton goBack = {navigation.goBack} />
          <View style = {styles.header}>
              <Header>Achievements</Header>
              </View>
          <View>
            <FlatList
              data={this.state.achList}
              ItemSeparatorComponent={()=><Divider style={{backgroundColor: 'black'}}/>}
              keyExtractor={(item, index)=> index.toString}
              renderItem={({item})=>{
                console.log(item);
                return(
                  <List.Item
                  title={item.title}
                  subtitle={item.description}
                  onPress={()=>{ }}
                  />
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )}
}

// export default function Achievement({navigation}){

//   const [ach, setAch] = useState([]);
//   const ref = db.collection('Achievements');

//   //read data

//   // useEffect(()=>{
//   //   ref.onSnapshot(
//   //     querySnapshot=>{
//   //       const ach = []
//   //       querySnapshot.forEach((doc)=>{
//   //         const {heading} = doc.data()
//   //         ach.push({
//   //           id: doc.id,
//   //           heading,
//   //         })
//   //       })
//   //       setAch(ach)
//   //     }
//   //   )
//   // }, [])

//   // render() {
//   //   return(
//   //   <ScrollView>
//   //     <SafeAreaView style={styles.container}>
//   //       <View>
//   //         <BackButton goBack = {navigation.goBack} />
//   //         <View style = {styles.header}>
//   //             <Header>Achievements</Header>
//   //             </View>
//   //         <View>
//   //           {/* <FlatList
//   //             data={ach}
//   //             numColumns={1}
//   //             renderItem={({item})=>(
//   //               <View>
//   //                 <Pressable style={styles.container}>
//   //                   <IonIcon
//   //                   name='trophy'
//   //                   color='purple'
//   //                   style={styles.icon}
//   //                   />
//   //                   <View style={styles.innerContainer}>
//   //                     <Text style={styles.itemHeading}>
//   //                       {item.heading[0].toUpperCase()+item.heading.slice(1)}
//   //                     </Text>
//   //                   </View>
//   //                 </Pressable>
//   //               </View>
//   //             )}
//   //           /> */}
//   //         </View>
//   //       </View>
//   //     </SafeAreaView>
//   //   </ScrollView>
//   // )}
// }

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


