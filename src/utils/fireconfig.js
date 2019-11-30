import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyAZu3Bi5h_OP2AKgK5WyYVw6giy3zx3S1k',
    authDomain: 'pivo-a3084.firebaseapp.com',
    databaseURL: 'https://pivo-a3084.firebaseio.com',
    projectId: 'pivo-a3084',
    storageBucket: 'pivo-a3084.appspot.com',
    messagingSenderId: '452027672664',
    appId: '1:452027672664:web:0a7cf34db1c6397cf3422d',
    measurementId: 'G-QNVNMRX9R7'
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.FacebookAuthProvider();

//
//firebase.analytics();
