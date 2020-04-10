import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDdqauIHs69uWYs1ts18mXjOMtDePsHkIw",
    authDomain: "crown-ecommerce-db-fca9f.firebaseapp.com",
    databaseURL: "https://crown-ecommerce-db-fca9f.firebaseio.com",
    projectId: "crown-ecommerce-db-fca9f",
    storageBucket: "crown-ecommerce-db-fca9f.appspot.com",
    messagingSenderId: "5861825042",
    appId: "1:5861825042:web:8bb0c459283a78b27296cb"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'}); // for popup sign feature

  export const signInWithGoogle =() => auth.signInWithPopup(provider);
  
  export default firebase;
