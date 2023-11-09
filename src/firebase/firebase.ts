// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQuJtM-KvKy9spqMdezWyva6uY_YMVT0",
  authDomain: "losowanie-71f28.firebaseapp.com",
  projectId: "losowanie-71f28",
  storageBucket: "losowanie-71f28.appspot.com",
  messagingSenderId: "956291742146",
  appId: "1:956291742146:web:07768e6ada3d996fe23e5b",
  measurementId: "G-6PQBTETT0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
const analytics = getAnalytics(app);