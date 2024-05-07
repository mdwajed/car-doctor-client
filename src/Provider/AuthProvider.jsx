import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user',currentUser);
      setLoading(false);
      // if user exist then issue a token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredential: true,
          })
          .then((res) => {
            console.log('token response', res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredential: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);
  const authInfo = { user, loading, createUser, signin, logOut };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
