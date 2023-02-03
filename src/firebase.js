import * as firebase from "firebase/app";

const firebaseConfig = {
  //   authDomain: "twitter-clonecoding-2da3a.firebaseapp.com",
  //   projectId: "twitter-clonecoding-2da3a",
  //   storageBucket: "twitter-clonecoding-2da3a.appspot.com",
  //   messagingSenderId: "148770139830",
  //   appId: "1:148770139830:web:e3b74a0730950789150017"
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP__PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGIN_ID,
  appId:process.env.REACT_APP_APP_ID
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);