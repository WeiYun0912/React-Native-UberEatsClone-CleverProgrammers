import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnyKisKnkvoj-1LQi0_rFWT9w-ohw746o",
  authDomain: "ubereatclone-4dbb5.firebaseapp.com",
  projectId: "ubereatclone-4dbb5",
  storageBucket: "ubereatclone-4dbb5.appspot.com",
  messagingSenderId: "753518939545",
  appId: "1:753518939545:web:dcc1b8302726d7402b1708",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };
