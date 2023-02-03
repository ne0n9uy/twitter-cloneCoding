import React from "react";
import { ReactDOM } from "react-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import AppRouter from "./Router";

console.log(firebase);

function App() { 
  return <AppRouter />;
}

export default App;
