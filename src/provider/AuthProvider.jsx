import React, { useEffect, useState } from "react";

import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUserWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUserWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateUser = (userData) => {
    setLoading(false)
    return updateProfile(auth.currentUser, userData)
  } 

  const forgetPassword = (email) => {
    setLoading(false)
    return sendPasswordResetEmail(auth, email)
  }

  const userInfo = {
    user,
    setUser,
    loading,
    logOutUser,
    createUserWithGoogle,
    createUserWithEmailPass,
    signInEmailPassword,
    updateUser,
    forgetPassword
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
