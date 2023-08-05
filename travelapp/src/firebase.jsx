// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';

// Initialize Firebase Authentication and get a reference to the service
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUVNatv6mqARPlnM6S6xr7ClQwBTC-s5g",
  authDomain: "artravelsco.firebaseapp.com",
  projectId: "artravelsco",
  storageBucket: "artravelsco.appspot.com",
  messagingSenderId: "864303983066",
  appId: "1:864303983066:web:d905bc6b67ae10f624f8e3",
  measurementId: "G-P6ZVVECDEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {app,auth};
