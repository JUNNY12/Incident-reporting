import { initializeApp } from "firebase/app";
import 'firebase/auth';
import {getAuth} from "firebase/auth";
import 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "incident-reporting-383016.firebaseapp.com",
  projectId: "incident-reporting-383016",
  storageBucket: "incident-reporting-383016.appspot.com",
  messagingSenderId: "420938616960",
  appId: "1:420938616960:web:7fd07b213979e0cb9d1665",
  measurementId: "G-0DJ8MHL53B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
const storage = getStorage(app);
export { storage };

export default app;
