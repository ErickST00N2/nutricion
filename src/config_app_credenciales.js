// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlMFFy8WGJt7DbhPo4h67Jj1LHpvrXIrc",
  authDomain: "club-nutricionista.firebaseapp.com",
  projectId: "club-nutricionista",
  storageBucket: "club-nutricionista.appspot.com",
  messagingSenderId: "949218830870",
  appId: "1:949218830870:web:b3d8405e37ad1bb0bb6337",
  measurementId: "G-V8LJ3YR0HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app