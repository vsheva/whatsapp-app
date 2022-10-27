import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6PeRrOOYK111GrLQ15LJ3OzJ6xA6oBqE',
  authDomain: 'whatsapp-f03b8.firebaseapp.com',
  projectId: 'whatsapp-f03b8',
  storageBucket: 'whatsapp-f03b8.appspot.com',
  messagingSenderId: '861874953142',
  appId: '1:861874953142:web:05c39679ec0945c0e1ff17',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
