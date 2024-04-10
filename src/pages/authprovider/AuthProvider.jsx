import { createContext, useEffect, useState } from "react";
import auth from "../../component/firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    // console.log(user);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const userUpdateProfile = (name,image)=>{
        updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
          
          }).catch((error) => {
            
          });
    }
   

    const login = (email, password) => {
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googlelogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const github = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = () => {
        
        setUser(null)
        signOut(auth)
    }

   useEffect(()=>{
    const unsubscrive =onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        setLoader(false)
         
        }
      });
      return () => unsubscrive();
   },[])


    const allvalue = {user,createUser,login,googlelogin,github,logout,loader}
    return (
        <div>
           <AuthContext.Provider value={allvalue}>
            {children}
           </AuthContext.Provider>
        </div>
    );
};
export default AuthProvider;