import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDEdGwvHNLhzHP3jh_R3iPCzUPi6BdyApE",
  authDomain: "netflix-react-75bfd.firebaseapp.com",
  projectId: "netflix-react-75bfd",
  storageBucket: "netflix-react-75bfd.appspot.com",
  messagingSenderId: "68934692395",
  appId: "1:68934692395:web:a3d66439e6294ae04f846e"
};

const firebase = Firebase.initializeApp(config);

export { firebase };