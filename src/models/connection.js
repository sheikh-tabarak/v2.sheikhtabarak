// import {initializeApp} from "firebase/app";

import firebase from 'firebase/compat/app';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCbtqO_Bjp2k8yT5NL86KTWXLg6-BoS5V8",
    authDomain: "sheikhtabarak-1019.firebaseapp.com",
    projectId: "sheikhtabarak-1019",
    storageBucket: "sheikhtabarak-1019.appspot.com",
    messagingSenderId: "937342048244",
    appId: "1:937342048244:web:79b8fd2a3b5f15dc538ba1",
    measurementId: "G-R77PC48PBW",
  };

//   const firestore = initializeApp(firebaseConfig).firestore;
  const firebaseconnection = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const storageRef = firebase.storage();


export default firebaseconnection;
export {storageRef}



