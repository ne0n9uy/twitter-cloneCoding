import React, {useState} from "react";
import { ReactDOM } from "react-dom";
// import firebase from "firebase/compat/app";
// import firebase from "../firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import AppRouter from "components/Router";
// import myFirebase from "../myFirebase";
import { authService} from "../myFirebase";
import Auth from "routes/Auth";

console.log(authService.currentUser);

function App() { 
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
  <>
    <Auth/>
      <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; Twitter {new Date().getFullYear()}</footer>
  </>
  
)}

export default App;
