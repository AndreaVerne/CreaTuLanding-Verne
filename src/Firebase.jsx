// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARfOcnoRJ99xxkqOQ8-tyiNsxVtJmWTdc",
  authDomain: "kirimakeup-coderhouse.firebaseapp.com",
  projectId: "kirimakeup-coderhouse",
  storageBucket: "kirimakeup-coderhouse.firebasestorage.app",
  messagingSenderId: "434392177608",
  appId: "1:434392177608:web:37c19b51090cd5cd013efd",
  measurementId: "G-4Z7H9JS2NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);