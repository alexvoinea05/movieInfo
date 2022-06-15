// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk2-YK0tZB9p7Jjrza66phkq0rSbMq-hs",
  authDomain: "proiect-dsd.firebaseapp.com",
  projectId: "proiect-dsd",
  storageBucket: "proiect-dsd.appspot.com",
  messagingSenderId: "1059856885005",
  appId: "1:1059856885005:web:c44619a614d51d5b983c44"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };