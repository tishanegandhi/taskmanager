import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAiiB5GJgyCESmLwZxltqTTk407__ay7hs",
  authDomain: "task-manager-a6a5f.firebaseapp.com",
  projectId: "task-manager-a6a5f",
  storageBucket: "task-manager-a6a5f.appspot.com",
  messagingSenderId: "725932171962",
  appId: "1:725932171962:web:2abde972a7377a75f99883",
  measurementId: "G-CF093SJEHS"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}