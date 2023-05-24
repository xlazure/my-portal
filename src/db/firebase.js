import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4YHa30IAW8TMcazyCAuGJJ-Ilr-mxyY4",
  authDomain: "my-portal-92867.firebaseapp.com",
  projectId: "my-portal-92867",
  storageBucket: "my-portal-92867.appspot.com",
  messagingSenderId: "336511540904",
  appId: "1:336511540904:web:5dc624e13cf4858195ac9d",
  measurementId: "G-XNX00JREM3",
};

// Initialize Firebase app
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase auth service
export const auth = getAuth(firebaseApp);
