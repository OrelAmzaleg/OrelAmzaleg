
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeNLu2RpR28ZdThydhcSzPGYgYrcs3Q6U",
    authDomain: "amzastore-c9769.firebaseapp.com",
    projectId: "amzastore-c9769",
    storageBucket: "amzastore-c9769.appspot.com",
    messagingSenderId: "499398067523",
    appId: "1:499398067523:web:7c1da3250364b56e65dbf6",
    measurementId: "G-P95YF8J3FM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};