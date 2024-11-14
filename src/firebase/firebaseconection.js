import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "  ",
    authDomain: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " "
  };
  

if (!firebase.apps.length) {
    // Inicializa o Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;