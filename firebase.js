// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {firestore, collection, getDocs, getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1zo9ci0RXQYBNUooGtSK2b29OPxOC0GE",
  authDomain: "aslassistfinal.firebaseapp.com",
  databaseURL: "https://aslassistfinal-default-rtdb.firebaseio.com",
  projectId: "aslassistfinal",
  storageBucket: "aslassistfinal.appspot.com",
  messagingSenderId: "380652280816",
  appId: "1:380652280816:web:5f49bf6df4977cdb401b35",
  //measurementId: "G-TYX10C1CBE"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore()
const colRef = collection(db, 'Achievements')
getDocs(colRef).then((snapshot)=>{
  let achieve = []
  snapshot.docs.forEach((doc)=>{
    achieve.push({...doc.data(), id: doc.id})
  })
}) 

const auth = getAuth(app);

export { auth }