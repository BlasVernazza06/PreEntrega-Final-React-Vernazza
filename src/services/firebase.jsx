import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyDiwfB1XtltNmkxdlBNHBOKORt0AKam4kw",
     authDomain: "aeroviajes-a2be4.firebaseapp.com",
     projectId: "aeroviajes-a2be4",
     storageBucket: "aeroviajes-a2be4.firebasestorage.app",
     messagingSenderId: "590223601368",
     appId: "1:590223601368:web:ee4e5f92a7fe114f68f1ad"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)