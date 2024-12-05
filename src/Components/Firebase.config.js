// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZBF7bG0lva_lcB_8nqvOdQx7c0eC8V1U",
  authDomain: "playlog-81400.firebaseapp.com",
  projectId: "playlog-81400",
  storageBucket: "playlog-81400.firebasestorage.app",
  messagingSenderId: "856381882323",
  appId: "1:856381882323:web:af637ff1db6ae1c3f97926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);