import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.process.env.VITE_API_KEY,
    authDomain: import.process.env.VITE_AUTH_DOMIAN,
    projectId: import.process.env.VITE_PROJECTID,
    storageBucket: import.process.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.process.env.VITE_messagingSenderId,
    appId: import.process.env.VITE_APPID,
    measurementId: import.process.env.VITE_MEASUREMNETId,
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const db = getDatabase(app)

export { auth, app,firestore,storage,db }; 