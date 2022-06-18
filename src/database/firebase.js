// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsm3YO8DwsrIKcpOAsgZrdEx9j-kedAmM",
    authDomain: "viper-database.firebaseapp.com",
    projectId: "viper-database",
    storageBucket: "viper-database.appspot.com",
    messagingSenderId: "62032523021",
    appId: "1:62032523021:web:4bbc8e0b760b8c5684ca44",
    measurementId: "G-812K0F4DYT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export {
    firebaseConfig,
    app,
    auth,
    db
};