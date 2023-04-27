// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-bb5ca.firebaseapp.com",
  projectId: "twitter-bb5ca",
  storageBucket: "twitter-bb5ca.appspot.com",
  messagingSenderId: "1027454322046",
  appId: "1:1027454322046:web:99255910ad03264b195f2f",
  measurementId: "G-E644YRJWN7"
};

// Initialize Firebase
const app =!getApps().length? initializeApp(firebaseConfig) : getApp();
const db= getFirestore()
const storage= getStorage()


export {db,storage,app};