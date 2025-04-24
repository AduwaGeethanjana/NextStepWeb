// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  getDocs,
  getDoc, 
  addDoc,
  doc, // Import `doc`
  setDoc // Import `setDoc`
} from "firebase/firestore";

// Firebase configuration
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

// Export Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Export Firestore functions for convenience
export { collection, getDocs,getDoc,addDoc, doc, setDoc };

export default app;
