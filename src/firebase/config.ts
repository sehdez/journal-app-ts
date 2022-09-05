// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM7rwvqmQlzNq4YW324V4rHs8CJCaWGZY",
    authDomain: "react-journal-cf533.firebaseapp.com",
    projectId: "react-journal-cf533",
    storageBucket: "react-journal-cf533.appspot.com",
    messagingSenderId: "700473104424",
    appId: "1:700473104424:web:a383362d08d51af7afbd1d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );