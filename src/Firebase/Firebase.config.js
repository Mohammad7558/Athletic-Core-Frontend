// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQXqcbHIBsAk3CVjHsomJ7bJ8sZY7VP5k",
  authDomain: "assignment-11-client-sid-64337.firebaseapp.com",
  projectId: "assignment-11-client-sid-64337",
  storageBucket: "assignment-11-client-sid-64337.firebasestorage.app",
  messagingSenderId: "460152125870",
  appId: "1:460152125870:web:f73110d6f89429024df03f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)