import {auth} from './firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import {Alert} from "react-native";

export const loginUser = async (email, password) => {
    try {
        const userInfo = await signInWithEmailAndPassword(auth, email, password)
        return {user: userInfo.user}
    } catch (error) {
        return {error: 'Email or password is incorrect'};
    }
};

export const createUser = async (email, password) => {
    try {
        const newUserInfo = await createUserWithEmailAndPassword(auth, email, password)
        await signInWithEmailAndPassword(auth, email, password)
        return {user: newUserInfo.user, error:null}
    } catch (error) {
        return {user: null, error}
    }
}

export const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log("Logged out");
    } catch (error) {
        Alert.alert(error.message)
    }
}