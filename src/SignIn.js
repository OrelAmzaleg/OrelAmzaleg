import React, { useState } from 'react';
import './SignIn.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import {auth} from "./firebase";

function SignIn() {
   const navigate = useNavigate();
   const [email, setEmail]=useState('');
   const [password,setPassword]=useState('');
   const singIn =e=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then((auth)=>{
        navigate("/")
    })
    .catch(error=>alert(error.message))
    }
   const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        if(auth){navigate('/')
        }
     })
    .catch(error=>alert(error.message))
   }
  return (
    <div className='body'>
    <div className='logo'> 
    <Link to="/">
    <img className ="Signin_logo" src='https://i.postimg.cc/bNhVgHPL/logogentelman.jpg  '/>
    </Link>
    <div className='SignIn_details'>
        <h1>Sing in</h1>
        <form>
        <h2>E-mail</h2>
        <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
        <h2>Password</h2>
        <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />
        <button type='submit' onClick={singIn} className='Signin_signInButton'>Sign In</button>
        </form>
        <p>by sign in you agree to orel amzaleg's Condition of ISRAEL SALE....</p>
        <button onClick={register} className='Signin_signUpButton'>Create Your Account</button>
        </div>
    </div>
    </div>
    )
}

export default SignIn 