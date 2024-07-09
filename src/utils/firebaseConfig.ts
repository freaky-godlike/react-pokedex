import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbAAa0vKxi0J0S7BorcvcI7IAa5RiWhZw",
  authDomain: "pokedex-11a58.firebaseapp.com",
  projectId: "pokedex-11a58",
  storageBucket: "pokedex-11a58.appspot.com",
  messagingSenderId: "208374644607",
  appId: "1:208374644607:web:10f77adb1210b319cf644a",
  measurementId: "G-6V6LS0YQ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");