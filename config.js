import * as firebase from 'firebase';
require('@firebase/firestore')





var firebaseConfig = {
  apiKey: "AIzaSyClblPSpEX2PiuZ2lYs64g9FZ7Ui6zrLCg",
  authDomain: "projectstoryhub.firebaseapp.com",
  databaseURL: "https://projectstoryhub.firebaseio.com",
  projectId: "projectstoryhub",
  storageBucket: "projectstoryhub.appspot.com",
  messagingSenderId: "223467439376",
  appId: "1:223467439376:web:8153c84cbef9ea0384d195"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);