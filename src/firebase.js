import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADTOQ2SBqwchkZk0NInP3uCdRC97ZrNMA",
  authDomain: "hotstar-clone-66f17.firebaseapp.com",
  projectId: "hotstar-clone-66f17",
  storageBucket: "hotstar-clone-66f17.appspot.com",
  messagingSenderId: "439003676874",
  appId: "1:439003676874:web:cb5e34484244e37c84b433",
  measurementId: "G-94YGSD9YHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);