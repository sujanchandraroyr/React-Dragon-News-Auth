import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    // loginUser
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }

    //signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //observ
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curentuser) => {
            setUser(curentuser)
            setLoading(false)
            console.log(curentuser)
        })
        return () => {
            unSubscribe()
        }
    },
    
     [])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Authprovider.propTypes = {
    children: PropTypes.node
}

export default Authprovider;