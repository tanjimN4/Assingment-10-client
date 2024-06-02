
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';

const auth = getAuth(app);


export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {

    const [user,setuser]=useState()
    const [loding,setLoding]=useState(true)

    const createUser =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIN =(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInPop=(provider)=>{
        setLoding(true)
        return signInWithPopup(auth,provider)
    }
    const logOut =()=>{
        setLoding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcrive =onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser)
        })
        return()=>{
            unsubcrive()
        }
    },[])

    const userInfo ={createUser,user,loding,signIN,signInPop,logOut}

   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;
