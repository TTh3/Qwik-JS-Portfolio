// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.QWIKapiKey,
  authDomain: process.env.QWIKauthDomain,
  projectId: process.env.QWIKprojectId,
  storageBucket: process.env.QWIKstorageBucket,
  messagingSenderId: process.env.QWIKmessagingSenderId,
  appId: process.env.QWIKappId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };

