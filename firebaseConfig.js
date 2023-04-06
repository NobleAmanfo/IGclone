import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDIhdgs6TXMJipAzCtCYXGqRwrxYm0_gqw",
    authDomain: "igclone-dc50d.firebaseapp.com",
    projectId: "igclone-dc50d",
    storageBucket: "igclone-dc50d.appspot.com",
    messagingSenderId: "615148957676",
    appId: "1:615148957676:web:6ad7fab123b408120f5ac9",
    measurementId: "G-LKDS8898ST"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export function signup(email, username, password){
    createUserWithEmailAndPassword(authentication, username, email, password);
}