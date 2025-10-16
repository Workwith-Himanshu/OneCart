import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecart-a7dfb.firebaseapp.com",
  projectId: "onecart-a7dfb",
  storageBucket: "onecart-a7dfb.firebasestorage.app",
  messagingSenderId: "1085082155097",
  appId: "1:1085082155097:web:34388250955604e6a9d948"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

