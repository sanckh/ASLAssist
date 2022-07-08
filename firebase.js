// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {firestore, getDocs, getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1zo9ci0RXQYBNUooGtSK2b29OPxOC0GE",
  authDomain: "aslassistfinal.firebaseapp.com",
  databaseURL: "https://aslassistfinal-default-rtdb.firebaseio.com",
  projectId: "aslassistfinal",
  storageBucket: "aslassistfinal.appspot.com",
  messagingSenderId: "380652280816",
  appId: "1:380652280816:web:5f49bf6df4977cdb401b35",
  measurementId: "G-TYX10C1CBE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)

// export const db = getFirestore(app);


const db = getFirestore()

const auth = getAuth(app);

export { auth, db }

