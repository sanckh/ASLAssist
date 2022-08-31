import firebase from '../firebase'

export async function getAch(retrieved){
    var achList = [];
    var snapshot = await firebase.firestore.collection('Achievements')
    .orderBy('title')
    .get()
  
    snapshot.forEach((doc)=>{
      achList.push(doc.data())
    });

    console.log(achList);
    retrieved(achList);
}