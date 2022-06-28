// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmuiN_oWQsMYtHmlMZzDJKFLx2muLS_ec",
  authDomain: "asl-assist.firebaseapp.com",
  projectId: "asl-assist",
  storageBucket: "asl-assist.appspot.com",
  messagingSenderId: "149243013990",
  appId: "1:149243013990:web:7f117842ec0a235a2df6a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app);

  //collection reference
  const colRef = collection(db, 'Achievements')

  //get collection data
  getDocs(colRef)
    .then((snapshot) => {
     let achievements = []
     snapshot.docs.forEach((doc) => {
      achievements.push({...doc.data(), id: doc.id})
     })
     console.log(achievements)
    })
    .catch(error => {
      console.log(error.message)
    })