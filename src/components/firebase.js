import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCNF7Ripu9p3_0CJta2WmYzPAklqipUepM",
  authDomain: "astralab-003.firebaseapp.com",
  databaseURL: "https://astralab-003.firebaseio.com",
  projectId: "astralab-003",
  storageBucket: "astralab-003.appspot.com",
  messagingSenderId: "411705174588",
  appId: "1:411705174588:web:ac03d97cd62bb3f499b139"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

