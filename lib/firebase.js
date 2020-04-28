import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBlaxJetrXQGzqv-v-w3iD-69quzIowoJg",
  authDomain: "ecom-7c4c0.firebaseapp.com",
  databaseURL: "https://ecom-7c4c0.firebaseio.com",
  projectId: "ecom-7c4c0",
  storageBucket: "ecom-7c4c0.appspot.com",
  messagingSenderId: "381922259598",
  appId: "1:381922259598:web:8f88c0d16728ad2cd84fdf",
  measurementId: "G-ERT34E3CKG"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();


export { firebase, firestore }