// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set, get, child } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiCxWaWYzKPFKEErAuaxhDTHoappkU8hc",
  authDomain: "laesa-shpe.firebaseapp.com",
  projectId: "laesa-shpe",
  storageBucket: "laesa-shpe.appspot.com",
  messagingSenderId: "146744816316",
  appId: "1:146744816316:web:50c2352326bfb784f556b9",
  measurementId: "G-SB3VS3LLR4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const auth = getAuth(app);
export const storage = getStorage(app);


//MIGHT NOT NEED THIS FUNCTION?
// export async function getUserName(uid) {
//   console.log(uid)
//   const collectionRef = collection(firestore, 'users');
//   const q = query(collectionRef, where('userId', '==', uid))
//   const document = await getDocs(q)
//   console.log(document.docs[0].data().hasCompletedSurvey)
//   return document.docs[0].data().hasCompletedSurvey
// }


