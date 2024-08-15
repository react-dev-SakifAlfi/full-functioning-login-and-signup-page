// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJUi4FNK-0IN_wjDs46gCtxUcEHiwtSE",
  authDomain: "chatting-app-1aa3a.firebaseapp.com",
  projectId: "chatting-app-1aa3a",
  storageBucket: "chatting-app-1aa3a.appspot.com",
  messagingSenderId: "287032477176",
  appId: "1:287032477176:web:4895c17f9020247c50c20d",
  measurementId: "G-HZQY5ZPNMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const database = getDatabase(app);

export default database