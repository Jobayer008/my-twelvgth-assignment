import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import  {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'



export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)
// for google user
const googleSignIn = (value) => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}


// for registration user
const signUp = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}

const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// 

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currenUser) =>{
        setUser(currenUser);
        setLoading(false)
    });
    return () => {
        return unsubscribe()
    };
},[])

const logOut = () => {
    setLoading(true)
    return signOut(auth)
}


const AuthInfo = {
    loading,
googleSignIn,
signUp,
signIn,
user,
logOut
}
    return <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;