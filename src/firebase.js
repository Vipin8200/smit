// Import Firebase core and services
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBpvwcrmVlCGRxhw0zWgFYb5ArsAb8o8H8",
  authDomain: "chillspot-77bdd.firebaseapp.com",
  projectId: "chillspot-77bdd",
  storageBucket: "chillspot-77bdd.appspot.com", // ✅ corrected the bucket URL
  messagingSenderId: "965596135239",
  appId: "1:965596135239:web:3dc1c7d977c3a02f53d662",
  measurementId: "G-69BJQRV5Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
