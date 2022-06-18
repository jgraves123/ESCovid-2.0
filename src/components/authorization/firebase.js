import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, sendSignInLinkToEmail, signOut} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../../database/firebase";
import { getFirestore, query, collection, getDocs, where, setDoc, doc } from 'firebase/firestore';
import {sendForm} from "emailjs-com";


// const firebaseConfig = {
//   apiKey: "AIzaSyDIXJ5YT7hoNbBFqK3TBcV41-TzIO-7n7w",
//   authDomain: "fir-auth-6edd8.firebaseapp.com",
//   projectId: "fir-auth-6edd8",
//   storageBucket: "fir-auth-6edd8.appspot.com",
//   messagingSenderId: "904760319835",
//   appId: "1:904760319835:web:44fd0d957f114b4e51447e",
//   measurementId: "G-Q4TYKH9GG7",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = await query(collection(db, "users"), where("uid", "==", user.uid));
    const qSnapshot = await getDocs(q)
    if (qSnapshot.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const actionCodeSettings = {
//   url: 'https://www.viper.games/login',
//   handleCodeInApp: true,
// };

const registerWithEmailPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // sendSignInLinkToEmail(auth, email, actionCodeSettings)
    const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        authProvider: "google",
        email: user.email,
      });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const passwordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailPassword,
  registerWithEmailPassword,
  passwordResetEmail,
  logout,
};
