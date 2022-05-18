import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAFaghlnoMhg6eQHE4VrtOYQ_nkcKR88c",
  authDomain: "airbnb-clone-d2929.firebaseapp.com",
  databaseURL: "https://airbnb-clone-d2929-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-d2929",
  storageBucket: "airbnb-clone-d2929.appspot.com",
  messagingSenderId: "539932340033",
  appId: "1:539932340033:web:f62bd2bcd5c1679c283bc0",
  measurementId: "G-Z766FHCH66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);