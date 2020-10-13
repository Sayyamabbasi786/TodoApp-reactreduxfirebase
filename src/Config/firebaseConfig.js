import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDEr8H---XsJWA-qoCmRrx8zfMgsOfzMIo",
    authDomain: "todoreactreduxfirebase-64108.firebaseapp.com",
    databaseURL: "https://todoreactreduxfirebase-64108.firebaseio.com",
    projectId: "todoreactreduxfirebase-64108",
    storageBucket: "todoreactreduxfirebase-64108.appspot.com",
    messagingSenderId: "186781122318",
    appId: "1:186781122318:web:fe999b4f301f5357e8a15f"
  };

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export {timestamp}

  export default firebase;