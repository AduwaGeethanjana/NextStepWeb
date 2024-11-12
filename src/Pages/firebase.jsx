// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2luPutyP2uK7u3P6leEbtDHcm4FkvNmI",
  authDomain: "nextstep-c0749.firebaseapp.com",
  projectId: "nextstep-c0749",
  storageBucket: "nextstep-c0749.appspot.com",
  messagingSenderId: "435097338810",
  appId: "1:435097338810:web:810896f6986d23471d9383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;