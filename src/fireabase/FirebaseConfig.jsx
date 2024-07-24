// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTLsPOAe26XKFWHnEIW1UjFL3JyHMs2Y",
  authDomain: "ecommerce-aa284.firebaseapp.com",
  projectId: "ecommerce-aa284",
  storageBucket: "ecommerce-aa284.appspot.com",
  messagingSenderId: "917640294558",
  appId: "1:917640294558:web:2fc399460e781c14fa0b8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
