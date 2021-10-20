import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged ,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [isLogin,setIsLogin] = useState(false);

    const auth = getAuth();



// Email SignIn part
    const toggoleLogin = e =>{
        setIsLogin(e.target.checked);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePassChange = e =>{
        setPassword(e.target.value);
    }

    const handleEmailSignIn = e =>{
         e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError('password at least 6 charactarlong')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('password must contained tow uppercase')
            return;
        }
        if(isLogin){
            processLogIn(email,password);
        }
        else{
            registarNewUser(email,password)
        }
        
    }
    const processLogIn = (email,password) =>{
        signInWithEmailAndPassword (auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error=>{
            setError(error.massege)
        })
    }

    const registarNewUser = (email,password) =>{
        createUserWithEmailAndPassword (auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.massage)
        })
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
        handlePassChange,
        error,
        toggoleLogin,
        isLogin,
    }
};
export default useFirebase;