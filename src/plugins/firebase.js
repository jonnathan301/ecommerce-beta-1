import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    
  };

  // Initialize Firebase 
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;