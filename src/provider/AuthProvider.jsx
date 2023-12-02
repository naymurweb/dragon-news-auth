import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const mainContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const auth = getAuth(app);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    user,
    signInUser,
    logOutUser,
    loading
  };

  return (
    <mainContext.Provider value={userInfo}>{children}</mainContext.Provider>
  );
};

export default AuthProvider;
