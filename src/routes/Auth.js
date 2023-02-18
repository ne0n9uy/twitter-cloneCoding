import React, { useState } from "react";
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

const Auth=() => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [newAccount, setNewAccount]=useState(true);
    const [error, setError]= useState("");

    const onChange=(event)=>{
        console.log(event.target.name);
        const {target:{name,value}}=event;
        if(name==="email"){
            setEmail(value);
        }
        else if (name==="password")
            setPassword(value);
        }
    
    const onSubmit = async(event)=>{    
        event.preventDefault();
        let data;
        const auth=getAuth();
        try{
            if(newAccount){
        //create account
                data=await createUserWithEmailAndPassword(
                auth,email,password
                );
            } else{
        //log in
                data= await signInWithEmailAndPassword(
                auth,email,password
                );
            }
        console.log(data);   
        } catch(error){
          console.log(error.message);
            }
        };
        const toggleAccount=()=>setNewAccount((prev)=>!prev);
        const onSocialClick=(event)=>{
            console.log(event.target.name);
        }
    return(
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    required value={email}
                    onChange={onChange}
                    />
                    <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required value={password} 
                    onChange={onChange}
                    />
                    <input 
                    type="submit" 
                    value={newAccount? "Create Account": "Log In"} 
                    onChange={onChange}
                    />
                    {error}
                </form>
                <span onClick={toggleAccount}>{newAccount ? "Sign In": "Create Account"}</span>
                <div>
                    <button onClick={onSocialClick} name="google">Continue with Google</button>
                    <button onClick={onSocialClick} name="github">Continue with Github</button>
                </div>
            </div>
        </>
    )
};
export default Auth;