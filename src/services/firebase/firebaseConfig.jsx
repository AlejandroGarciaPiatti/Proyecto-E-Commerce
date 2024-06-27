import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyAKAPYsPVw2QhH_HNU6kMxQR8OFbMInzJw",
  
    authDomain: "cursosabadotest.firebaseapp.com",
  
    projectId: "cursosabadotest",
  
    storageBucket: "cursosabadotest.appspot.com",
  
    messagingSenderId: "639393642758",
  
    appId: "1:639393642758:web:b74596a07c2ed"
  
  }

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  