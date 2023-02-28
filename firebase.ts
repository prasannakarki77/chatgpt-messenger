import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP6GqsH0RT0iyAoCInSaB6z35yJnPkKAM",
  authDomain: "chatgpt-messenger-2106e.firebaseapp.com",
  projectId: "chatgpt-messenger-2106e",
  storageBucket: "chatgpt-messenger-2106e.appspot.com",
  messagingSenderId: "1047593693072",
  appId: "1:1047593693072:web:532da0452299f8dc904d15",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
