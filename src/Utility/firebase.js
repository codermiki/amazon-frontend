// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCe_N21-30NiAhKrgAA8ZJm2xcsLcfPHA",
  authDomain: "clone-235c0.firebaseapp.com",
  projectId: "clone-235c0",
  storageBucket: "clone-235c0.firebasestorage.app",
  messagingSenderId: "374097143905",
  appId: "1:374097143905:web:150a49ef5d121ebb20a220",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
