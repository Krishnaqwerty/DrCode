
// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "tech-43a4a.firebaseapp.com",
  projectId: "tech-43a4a",
  storageBucket: "tech-43a4a.appspot.com",
  messagingSenderId: "398465910556",
  appId: "1:398465910556:web:ede70c2214dffffb671cd9",
  measurementId: "G-TXE1JYRFVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export authentication module
export const db = getFirestore(app); // Export Firestore database

export default app;