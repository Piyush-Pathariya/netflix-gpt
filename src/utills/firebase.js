// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZY6p79AeS-mrtMSevjN3ynCMCL-6NHQ8",
  authDomain: "netflixgpt-6509f.firebaseapp.com",
  projectId: "netflixgpt-6509f",
  storageBucket: "netflixgpt-6509f.firebasestorage.app",
  messagingSenderId: "735206112341",
  appId: "1:735206112341:web:e4a7be462080fff32b68dc",
  measurementId: "G-ZRNQBVPHWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();