import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0fP7JHmYXZQs_hwdUBrnkYvAFgLX_F4Y",
    authDomain: "aptiveimperium.firebaseapp.com",
    projectId: "aptiveimperium",
    storageBucket: "aptiveimperium.firebasestorage.app",
    messagingSenderId: "304580300538",
    appId: "1:304580300538:web:b2d7e6b5abc84dbb918343",
    measurementId: "G-HG5YYV4HR1"
  };

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
// export const storage = getStorage(app);
 export const database = getFirestore(app);
 export const analytics = () => getAnalytics(app);

export default app