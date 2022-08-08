// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCDoBk_x92C3Rc2LvMgF2fKUVlJRsogzo',
  authDomain: 'miniblog-7b7ba.firebaseapp.com',
  projectId: 'miniblog-7b7ba',
  storageBucket: 'miniblog-7b7ba.appspot.com',
  messagingSenderId: '1049310766347',
  appId: '1:1049310766347:web:8ea8f15ed4a4b7053bee0e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
