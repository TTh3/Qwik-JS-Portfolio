// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKmC-eohJVjEuFA6tyQBbw3W55_k5Zw9c",
  authDomain: "chat-app-a4cd7.firebaseapp.com",
  projectId: "chat-app-a4cd7",
  storageBucket: "chat-app-a4cd7.appspot.com",
  messagingSenderId: "336999748935",
  appId: "1:336999748935:web:3e351ad0ff5d65b2cae862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };

