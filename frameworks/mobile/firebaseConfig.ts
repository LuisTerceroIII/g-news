// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp5DiHkBlDvfC5isKUUTmq2ZP4eGoUs8k",
  authDomain: "news-board-d605b.firebaseapp.com",
  projectId: "news-board-d605b",
  storageBucket: "news-board-d605b.appspot.com",
  messagingSenderId: "21756226705",
  appId: "1:21756226705:web:eaf4180f9963bc8bab2330",
  measurementId: "G-3P9H9GSFCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
