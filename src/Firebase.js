// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqXb3kYm2V1uF0rsUzEK7GScm9SJvbhIg",
    authDomain: "eshop-1781e.firebaseapp.com",
    projectId: "eshop-1781e",
    storageBucket: "eshop-1781e.firebasestorage.app",
    messagingSenderId: "52465748181",
    appId: "1:52465748181:web:3449ca75c6ccdbc0a87a5c",
    measurementId: "G-7594GD4612"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;




