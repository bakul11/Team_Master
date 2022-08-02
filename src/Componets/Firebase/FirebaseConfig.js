// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcwjgAuBO8D-p_nyqGKFzdnpp1y7Ng4Hk",
    authDomain: "teamtech-34f33.firebaseapp.com",
    projectId: "teamtech-34f33",
    storageBucket: "teamtech-34f33.appspot.com",
    messagingSenderId: "453989461910",
    appId: "1:453989461910:web:7cefe732b78950f19cf7b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;