import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqNdqQqu6uv5X3KZvikFMxE5zNQfLx1ps",
  authDomain: "dadamemorygame.firebaseapp.com",
  projectId: "dadamemorygame",
  storageBucket: "dadamemorygame.appspot.com",
  messagingSenderId: "508896497562",
  appId: "1:508896497562:web:68838b3708de0faa793423",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
