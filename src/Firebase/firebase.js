import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyDQP2y0MD1NYDm20NM2x6LxmEF7Z_u6vLs",
      authDomain: "instagram-clone-82f58.firebaseapp.com",
      projectId: "instagram-clone-82f58",
      storageBucket: "instagram-clone-82f58.appspot.com",
      messagingSenderId: "1077428323885",
      appId: "1:1077428323885:web:409d8476e5d390ba9ddaa4",
      measurementId: "G-4NNW8S528H"
    });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}