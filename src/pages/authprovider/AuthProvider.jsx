import { createContext, useEffect, useState } from "react";
import auth from "../../component/firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
   

    const login = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googlelogin = () => {
        signInWithPopup(auth, googleProvider)
    }

    const github = () => {
        signInWithPopup(auth, githubProvider)
    }

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
         
        }
      });
   },[])


    const allvalue = {createUser,login,googlelogin,github}
    return (
        <div>
           <AuthContext.Provider value={allvalue}>
            {children}
           </AuthContext.Provider>
        </div>
    );
};
export default AuthProvider;