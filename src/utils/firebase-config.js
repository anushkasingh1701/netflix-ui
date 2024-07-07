// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6g5gv5CjJl5mUQLWpIp7DTZxI54hI_Uo",
  authDomain: "react-netflix-clone-dc162.firebaseapp.com",
  projectId: "react-netflix-clone-dc162",
  storageBucket: "react-netflix-clone-dc162.appspot.com",
  messagingSenderId: "366983949230",
  appId: "1:366983949230:web:b1889d7f46371b9641f63f",
  measurementId: "G-NJ346VHX9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)