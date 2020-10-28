import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALo61_HtP8lqD3JsoVGAQ-L3JUpglzOJA",
    authDomain: "cloth-web-store.firebaseapp.com",
    databaseURL: "https://cloth-web-store.firebaseio.com",
    projectId: "cloth-web-store",
    storageBucket: "cloth-web-store.appspot.com",
    messagingSenderId: "373442221595",
    appId: "1:373442221595:web:9a7b326214cf78ab514abe",
    measurementId: "G-6J61VRNBSY"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//   Authenticate Using Google Sign-In 

//   Create an instance of the Google provider object
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

//  sign in with a pop-up window
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;