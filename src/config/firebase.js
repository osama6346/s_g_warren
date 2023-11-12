import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, useDeviceLanguage , signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set, get , onValue,push, remove, update} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD9iGZQMO-nq0LEEZQJ5eNfb2_sHZ_jeyc",
    authDomain: "sgwarren-16aaf.firebaseapp.com",
    databaseURL: "https://sgwarren-16aaf-default-rtdb.firebaseio.com",
    projectId: "sgwarren-16aaf",
    storageBucket: "sgwarren-16aaf.appspot.com",
    messagingSenderId: "561943334943",
    databaseURL: "https://sgwarren-16aaf-default-rtdb.firebaseio.com/",
    appId: "1:561943334943:web:8c50bbebf607fbc03b852a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
const database = getDatabase(app);
  export { auth, firestore , createUserWithEmailAndPassword, database, ref, set, signInWithEmailAndPassword,get,onValue,push, remove, update};
