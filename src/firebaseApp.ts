import { initializeApp, FirebaseApp, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore';

export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

try {
  app = getApp('app');
} catch (e) {
  app = initializeApp(firebaseConfig);
}
const firebase = initializeApp(firebaseConfig, 'app');

export const db = getFirestore(app);

export default firebase;
