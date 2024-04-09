
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLOIMLrUbITY62wg5zKNx-_qIL3JjE8CE",
  authDomain: "react-assignment-9-ccbcd.firebaseapp.com",
  projectId: "react-assignment-9-ccbcd",
  storageBucket: "react-assignment-9-ccbcd.appspot.com",
  messagingSenderId: "1005031763090",
  appId: "1:1005031763090:web:085c97c9edd2db7d55ca4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;