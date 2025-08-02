import {auth} from './firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

export const loginUser = async (email,password) => {
    try{
        const userInfo = await signInWithEmailAndPassword(auth,email,password)
        return {user: userInfo.user}
    } catch(error){
        return {error: 'Email or password is incorrect'};
    }
};

export const createUser = async (email,password) => {
    try {
        const newUserInfo = await createUserWithEmailAndPassword(auth, email, password)
        return {user: newUserInfo}
    } catch(error){
        return {error: error.message}
    }
}