import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmfWZMGksYv8kExvQGjNs23dXDEIYu-v0",
  authDomain: "ecommerce-cursoreactef.firebaseapp.com",
  projectId: "ecommerce-cursoreactef",
  storageBucket: "ecommerce-cursoreactef.appspot.com",
  messagingSenderId: "1021360943731",
  appId: "1:1021360943731:web:3612d179e1a9db7f7eb006"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


