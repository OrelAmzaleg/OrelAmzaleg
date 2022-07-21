import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvidor';
import { auth } from './firebase';

function Header() {
const [{basket,user},dispatch] = useStateValue();
const handleAuthentication=() =>
{
  if(user){
   auth.signOut();
}
}
  return (
    <div className='header'> 
    <Link to="/">
    <img className ="header_logo" src='https://i.postimg.cc/bNhVgHPL/logogentelman.jpg'/>
    </Link>
     <div className="header_auth">
     <Link to={!user&&"/signinpage"}>
        <div onClick={handleAuthentication}className="header_option">
        <span className='optionLineTow'>{user?'🔓Sign Out':'🔐Sing In'}</span>
        <span className='optionLineOne'>{user? 'Hello ' + user.email: 'Hello,Guest'}</span>
        </div>
        </Link>
        <div className='header_option'>
        <Link to={"/whiskeypage"}>
        <span className='optionLineOne'>Whiskey</span>
        </Link>
        <Link to={"/winepage"}>
        <span className='optionLineOne'>Wine</span>
        </Link>
        <Link to={"/cigarspage"}>
        <span className='optionLineOne'>Cigars</span>
        </Link>
        <Link to={"/giftspage"}>
        <span className='optionLineOne'>Gifts</span>
        </Link>
        <Link to={"/aboutuspage"}>
        <span className='optionLineOne'>About Us</span>
        </Link>
        <span className='optionLineOne'>
          <Link to="/checkoutpage">
          <img className ="header_basketIcon" src='https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg'/>
          <span className='header_basketCount'>{basket?.length}</span>
          </Link>
          </span>
          </div>
        </div>
       
   
      
       
        </div>  
     
          
        
        
 
    
  )
}

export default Header 
