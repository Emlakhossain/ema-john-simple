// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdEPcLNZNuqj_n0Sfvajs8GcxzoMfkpxY",
    authDomain: "ema-jhon-project-with-auth.firebaseapp.com",
    projectId: "ema-jhon-project-with-auth",
    storageBucket: "ema-jhon-project-with-auth.appspot.com",
    messagingSenderId: "499983599813",
    appId: "1:499983599813:web:3dbba84f8e7d145a3788ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;