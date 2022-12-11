import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdyeD4UvaWxlkWeo50ADglUOrVOa-Lxz4",
  authDomain: "react-auth-c9e8e.firebaseapp.com",
  projectId: "react-auth-c9e8e",
  storageBucket: "react-auth-c9e8e.appspot.com",
  messagingSenderId: "139044622103",
  appId: "1:139044622103:web:87fd14ee90ae5890ca7152",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);

export default app;
