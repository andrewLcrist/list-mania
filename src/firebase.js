import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOSClp66reN3GnR96VIyN78yqGg6rGMno",
  authDomain: "list-mania.firebaseapp.com",
  databaseURL: "https://list-mania.firebaseio.com",
  projectId: "list-mania",
  storageBucket: "list-mania.appspot.com",
  messagingSenderId: "573952654600"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
