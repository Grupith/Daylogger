import firebase from 'firebase/app';
import 'firebase/auth';
import dotenv from 'dotenv';
dotenv.config();

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


// Sign in functionality using Google
export const SignInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log('User signed in!', res.user);
    }).catch((error) => {
        console.log(error);
    })
}

// Logout from your Google account
export const LogOut = () => {
    auth.signOut().then(() => {
        console.log('Logged out!');
    }).catch((error) => {
        console.log(error.message);
    })
}