// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXIhWx7UKJBm51l5DxFlbBQJPktBG_Is",
  authDomain: "my-asm-10.firebaseapp.com",
  projectId: "my-asm-10",
  storageBucket: "my-asm-10.appspot.com",
  messagingSenderId: "90546702883",
  appId: "1:90546702883:web:9c670731a2e7044bf03f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;