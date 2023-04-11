import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBzL6-K-_DM1Wx-XeMOPXY72l1PXt0-gP8",
  authDomain: "ecomplay-react.firebaseapp.com",
  projectId: "ecomplay-react",
  storageBucket: "ecomplay-react.appspot.com",
  messagingSenderId: "609474577850",
  appId: "1:609474577850:web:012b4a580c159bf0a44983",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
