import React from "react";
// import { Home } from './Home'
// import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import './App.css';
import '../App.css';

import "firebase/compat/auth";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
// const auth = firebase.auth();
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCwLY2Ull0mxQODkiSEclDNBqDZe8RVB64",
  authDomain: "fir-auth-73da1.firebaseapp.com",
  projectId: "fir-auth-73da1",
  storageBucket: "fir-auth-73da1.firebasestorage.app",
  messagingSenderId: "1067752426137",
  appId: "1:1067752426137:web:d8b856cb9a6361cca54608",
  measurementId: "G-J2H0CS9JX5"
};

const app =  initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider();


function Firebase(){
    const[value,setValue] = useState(null);

    const handleClick = ()=>{
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user);
      })
    }

  console.log(value,"checking");

     const logoutButton=()=>{
     window.location.reload();
     }

    return(
        <>
        <div className="container">
           <center>  
                   {value ? 
                    <div>
                     <h1 className="data"> Name : {value.displayName}</h1>
                      <h2 className="data">Email : {value.email}</h2> 
                      <button onClick = {logoutButton}>LogOut</button>
                       </div> : 
                       <div>
                        <h1 className="SignIn">SIGNIN</h1>
                        <button onClick = {handleClick}>Sign In with Google</button>
                        </div>
                    }
           </center>
         </div>
        </>
    )
}
export { Firebase }