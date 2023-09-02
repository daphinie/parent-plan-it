import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBSP3SVb_HPcorwOBBBennB7WiYOWcqK1I",

  authDomain: "parent-plan-it.firebaseapp.com",

  projectId: "parent-plan-it",

  storageBucket: "parent-plan-it.appspot.com",

  messagingSenderId: "974039844362",

  appId: "1:974039844362:web:ea06d2f8b3d7a356be01f3",

  measurementId: "G-23G3FJZTGW"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
