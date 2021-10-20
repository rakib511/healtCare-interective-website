import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();


// Email SignIn part
    const handleEmailChange = () =>{

    }
    const handleEmailSignIn = e =>{
        e.preventDefault();

    }
    // Google SignIn part
    const signInUsingGoogle =()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .finally(()=>setIsLoading(false));
    }

    useEffect( () =>{
        const unsubscribed=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    },[])
    const logout =() =>{
        setIsLoading(true)
        signOut(auth)
        .then(() =>{})
        .finally(()=>setIsLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        logout,
        isLoading,
        handleEmailSignIn,
        handleEmailChange,
    }
};
export default useFirebase;