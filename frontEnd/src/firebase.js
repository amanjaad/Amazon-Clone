import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4z_7GA5Fp2qCQUilxqytKnF5xK1eaCIM",
  authDomain: "clone-2d9cb.firebaseapp.com",
  projectId: "clone-2d9cb",
  storageBucket: "clone-2d9cb.appspot.com",
  messagingSenderId: "369143078529",
  appId: "1:369143078529:web:19ca7f2fcbbaf99f7b7780",
  measurementId: "G-XHFNR7C8E3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
