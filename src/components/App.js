import React, {useEffect, useState} from "react";
import { ReactDOM } from "react-dom";
// import firebase from "firebase/compat/app";
// import firebase from "../firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import AppRouter from "components/Router";
// import myFirebase from "../myFirebase";
import {authService} from "../myFirebase";

console.log(authService.currentUser);

function App() { 
  const [init, setInit]=useState(false);
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  useEffect(()=>{
    //사용자 로그인 상태 변화 관찰 sdk
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true);
    } else{
      setIsLoggedIn(false);
    }
    setInit(true);
  });
  }, [])
  return (
  <>
    { init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
    <footer>&copy; Twitter {new Date().getFullYear()}</footer>
  </>
  
)}
  
export default App;
