  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  var firebaseConfig = {
    apiKey: "AIzaSyDSa5_KGOyXQ8j1m7fiO5JxYaAkvwjtnpY",
    authDomain: "react-and-firebase-d233b.firebaseapp.com",
    databaseURL: "https://react-and-firebase-d233b.firebaseio.com",
    projectId: "react-and-firebase-d233b",
    storageBucket: "react-and-firebase-d233b.appspot.com",
    messagingSenderId: "681721569469",
    appId: "1:681721569469:web:25124f82f9eb2e52c297d4",
    measurementId: "G-2QNVXL1TEB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;
