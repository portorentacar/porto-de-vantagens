import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'; 
  
  let firebaseConfig = {
    apiKey: "AIzaSyB_G5skeeAKqhjP6BzcfHZnLzxgz3DRsAg",
    authDomain: "clube-de-vantagens-porto.firebaseapp.com",
    projectId: "clube-de-vantagens-porto",
    storageBucket: "clube-de-vantagens-porto.appspot.com",
    messagingSenderId: "904865348401",
    appId: "1:904865348401:web:a18785a55e729fc7684e10",
    measurementId: "G-0X4SEZNW3E"
  };

  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

 export default firebase;
