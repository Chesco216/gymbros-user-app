// import { FB_API_KEY } from '@env'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: FB_API_KEY,
  apiKey: "AIzaSyAx-w0cRDRU3YXb28z5W70BEuu0YMK1waI",
  authDomain: "gymbros-f0bab.firebaseapp.com",
  projectId: "gymbros-f0bab",
  storageBucket: "gymbros-f0bab.appspot.com",
  messagingSenderId: "755742057940",
  appId: "1:755742057940:web:bf0b71ba42f8a39c662241",
  measurementId: "G-QVSYN80TR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
// const analytics = getAnalytics(app);
