// import firebase from '../firebase'
// import {firestore, collection, getDocs, getFirestore} from 'firebase/firestore';

// export async function getAchievements(achRet){
//     var ach = []
//     var snapshot = await firebase.firestore()
//     .collection('Achievements').orderBy("title").get()

//     snapshot.forEach((doc)=>{
//         const achDoc = doc.data()
//         ach.push(achDoc)
//     })
//     achRet(ach)
// }
import { firebase, collection } from 'firebase/firestore';

export async function getAch(achRetrieved){
    var achList = []
    var snapshot = await firebase.firestore()
    .collection('Achievements')
    .get()

    snapshot.forEach((doc)=>{
        achList.push(doc.data())
    })
    achRetrieved(achList)
}