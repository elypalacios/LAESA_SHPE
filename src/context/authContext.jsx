import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase-config"; // only import auth
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";



// Create the context
export const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    loading: true,
    forgotPassword: () => Promise,
});

// Hook to use the context
export const useAuth = () => useContext(AuthContext);

// Context provider component
export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isSubscribed = true; // Flag to handle async operations safely

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (isSubscribed) {
                setCurrentUser(user);
                setLoading(false);
            }
        });

        // Cleanup function to unsubscribe and set isSubscribed to false
        return () => {
            isSubscribed = false;
            unsubscribe();
        };
    }, []);

    // User registration function
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // User login function
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // User logout function
    const logout = () => {
        return signOut(auth); 
    };

    // Password reset function
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email, { url: "http://localhost:5175/login" });
    };

    // The context value that will be passed down to the consumers
    const value = {
        currentUser,
        register,
        login,
        logout,
        loading,
        forgotPassword,
    };

    // Return the provider with the passed down value
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

