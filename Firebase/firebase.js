import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCMN6IDgGjC95TqS2Y2Aczfom46lsB_lGg",
    authDomain: "party-pass-467119.firebaseapp.com",
    projectId: "party-pass-467119",
    storageBucket: "party-pass-467119.firebasestorage.app",
    messagingSenderId: "852980020033",
    appId: "1:852980020033:web:ec27bb54f554d57e5a27c0",
    measurementId: "G-097JCJQ8TC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});

export {auth};