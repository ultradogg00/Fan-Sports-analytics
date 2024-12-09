// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpg-eT-Gyk9XETiDeVv6le0WNIPKOZi9w",
  authDomain: "fan-sports-analytics.firebaseapp.com",
  projectId: "fan-sports-analytics",
  storageBucket: "fan-sports-analytics.firebasestorage.app",
  messagingSenderId: "1012525724891",
  appId: "1:1012525724891:web:232d8fc6d12a5530f288fe"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

