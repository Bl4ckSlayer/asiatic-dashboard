// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyCW9Zr-gteglOQYOWDdOOJTXYVfSx7ka8E",
  // authDomain: "asiatic-dashboard.firebaseapp.com",
  // projectId: "asiatic-dashboard",
  // storageBucket: "asiatic-dashboard.appspot.com",
  // messagingSenderId: "27586215846",
  // appId: "1:27586215846:web:c46840e56651bb57035967",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
