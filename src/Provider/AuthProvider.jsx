import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Correct import
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase_config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                console.log(currentUser);
                setUser(currentUser);
            }
            else {
                console.log("user is not logged in");
                setUser(null);
            }
        });
        return unsubscribe;
    }, [])
    const authentications = {user, createUser, userLogin, userLogout };

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
