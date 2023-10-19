import {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);
    const googleProvider = new GoogleAuthProvider;
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut  = () => {
        setLoding(true);
        return signOut(auth)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
        })

        return () => unsubscribe();
    },[])
    const authUser = {
        user,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;