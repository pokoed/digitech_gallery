import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBKOovVoHX__PadBFqIB-r95YDf79ljuoA",
    authDomain: "digitechgallery-65f74.firebaseapp.com",
    projectId: "digitechgallery-65f74",
    storageBucket: "digitechgallery-65f74.appspot.com",
    messagingSenderId: "879090233244",
    appId: "1:879090233244:web:60c3c0674f3dda2d41e259",
    measurementId: "G-K6XQWTNMDZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;