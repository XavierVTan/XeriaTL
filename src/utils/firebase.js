// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "xeriatl-5f74c.firebaseapp.com",
  projectId: "xeriatl-5f74c",
  storageBucket: "xeriatl-5f74c.appspot.com",
  messagingSenderId: "511463175231",
  appId: "1:511463175231:web:13833d0f6661c65d0b748a",
  measurementId: "G-Q5GZW1KFGB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
