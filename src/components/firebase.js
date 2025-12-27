import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9xRw3RXUAH6YBVFO3edZesKQhcQ0FFA4",
  authDomain: "eccomerese.firebaseapp.com",
  projectId: "eccomerese",
  storageBucket: "eccomerese.appspot.com",  // FIXED
  messagingSenderId: "430382395864",
  appId: "1:430382395864:web:2d1f4d18a4e72dd49a82ad",
  measurementId: "G-9XRRNGXKD4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleauth= new GoogleAuthProvider(app)
