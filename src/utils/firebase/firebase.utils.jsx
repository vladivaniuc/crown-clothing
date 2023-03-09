// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore, 
  doc,
  getDoc,
  setDoc} 
from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxPnaeFAY6parBopzZdfZqg5oZ7w2blJE",
  authDomain: "crown-clothing-db-38d4c.firebaseapp.com",
  projectId: "crown-clothing-db-38d4c",
  storageBucket: "crown-clothing-db-38d4c.appspot.com",
  messagingSenderId: "551218638267",
  appId: "1:551218638267:web:28e680cc762d0cc215689e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, `users`, userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
     console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
      
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangeLister = (callback) => 
  onAuthStateChanged(auth, callback);