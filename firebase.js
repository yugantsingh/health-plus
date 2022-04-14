// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdLrYv27jhOAcokoXoNHZQTcxXwUFgW8",
  authDomain: "health-plus-7144c.firebaseapp.com",
  projectId: "health-plus-7144c",
  storageBucket: "health-plus-7144c.appspot.com",
  messagingSenderId: "772341127363",
  appId: "1:772341127363:web:dcf3b1da3b2fe45dd1ea76",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage};
