import { createContext, useEffect, useState } from "react";
import auth from "../../component/firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthProvider = ({children}) => {
    const [reload,setReload] =useState(false)
    const [user,setUser] = useState(null);
    // console.log(user);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const userUpdateProfile = (name,image)=>{
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    const upProfile =(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayname:name,
            photoURl:image,
        })
    }
   

    const login = (email, password) => {
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
    }



  
    



    const googlelogin = () => {
        setLoader(true)
         signInWithPopup(auth, googleProvider)
        .then(() => {
            
            
            
            setLoader(false)
        })
        .catch((error) => {
            
            toast.error('Failed to login with Google');

            setLoader(false)
        });
    }

    const github = () => {
        setLoader(true)
        signInWithPopup(auth, githubProvider)
        .then(() => {
            toast.success('Login successful with Github');
            setLoader(false)
        })
        .catch((error) => {
            
            toast.error('Failed to login with Github');
            setLoader(false)
        });
    }
    
    const logout = () => {
        setLoader(true)
        setUser(null)
        signOut(auth)
    }

   useEffect(()=>{
    const unsubscrive =onAuthStateChanged(auth, (user) => {
        // if (user) {
        setUser(user)
        // console.log(user);
        setLoader(false)
         
        // }
      });
      return () => unsubscrive();
   },[])



    const allvalue = {user,upProfile,setReload,createUser,login,googlelogin,github,logout,loader,userUpdateProfile}
    return (
        <div>
           <AuthContext.Provider value={allvalue}>
            {children}
           </AuthContext.Provider>
           <ToastContainer></ToastContainer>
        </div>
    );
};
export default AuthProvider;