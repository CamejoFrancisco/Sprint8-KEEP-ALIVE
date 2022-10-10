import React, { useContext, useEffect, useState } from "react";
import { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);

    //Criando Usuário
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //Login 
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    //logout 
    function logout() {
        return auth.signOut()
    }

    //logout 
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    //set User
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}