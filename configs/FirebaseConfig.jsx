// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Required for side-effects
import "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0LV60bi8KGmmNgNdq7NfLyFaWDD7DbQo",
  authDomain: "mobilebuyerapp-574ff.firebaseapp.com",
  projectId: "mobilebuyerapp-574ff",
  storageBucket: "mobilebuyerapp-574ff.appspot.com",
  messagingSenderId: "40701800409",
  appId: "1:40701800409:web:7345c452fe1b8e5a46f3c8",
  measurementId: "G-MWV8K9GM44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app)