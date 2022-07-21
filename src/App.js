import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout';
import SignIn from './SignIn';
import Payment from './Payment';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvidor';
import BottomTitle from './BottomTitle';
import Whiskey from './Whiskey';
import Wine from './Wine';
import Cigars from './Cigars';
import Gifts from './Gifts';
import AboutUs from './AboutUs';
import {loadStripe} from '@stripe/stripe-js/pure'
import {Element} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51LNJYSJaR7LXk4yudbpl2lJivhxSphEYh8EJoICLwqvs08ZscGJQozLyayhCivF0YvAOayCx9u7fpQWS3pUA3ZWU00gyCDBRPc");

function App() {
  
  const[{},dispatch] = useStateValue();
  React.useEffect(()=>{
  auth.onAuthStateChanged(authUser =>{
  console.log('User issss>>>>', authUser);
  if(authUser){//if user loged in
  dispatch({
   type:'SET_USER',
   user: authUser
  })
}
  else{//the user logout
    dispatch({
      type:'SET_USER',
      user: null
     })
  }
})
  },[])

  return (
    //BEM
    <div className="App">
    <Routes>
    <Route path='/' element={<Homepage/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/checkoutpage' element={<Checkoutpage/>}/>
      <Route path='/signinpage' element={<Signinpage/>}/>
      <Route path='/paymentpage' element={<Paymentpage/>}/>
      <Route path='/whiskeypage' element={<Whiskeypage/>}/>
      <Route path='/winepage' element={<Winepage/>}/>
      <Route path='/cigarspage' element={<Cigarspage/>}/>
      <Route path='/giftspage' element={<Giftspage/>}/>
      <Route path='/aboutuspage' element={<AboutUspage/>}/>
    </Routes>
  </div>
);
}


function Homepage() {
  return (
    <>
      <main>
      <Header />
      <Home />
      <BottomTitle/>
      </main>
  
    </>
  );
}

function Checkoutpage() {
  return (
    <>
      <main>
      <Header />
     <Checkout/>
      </main>
       </>
  );
}
function Signinpage() {
  return (
    <>
      <main>
      <SignIn />
      </main>
      <nav>
      </nav>
    </>
  );
}
function Paymentpage() {
  return (
    <>
      <main>
      <Header />
     
     <Payment/>
      </main>
      <nav>
      </nav>
    </>
  );
}
function Whiskeypage(){
  return (
    <>
      <main>
      <Header />
      <Whiskey />
      <BottomTitle/>
      </main>
  
    </>
  );
}
function Winepage(){
  return (
    <>
      <main>
      <Header />
      <Wine />
      <BottomTitle/>
      </main>
  
    </>
  );
}
function Cigarspage(){
  return (
    <>
      <main>
      <Header />
      <Cigars />
      <BottomTitle/>
      </main>
  
    </>
  );
}
function Giftspage(){
  return (
    <>
      <main>
      <Header />
      <Gifts />
      <BottomTitle/>
      </main>
  
    </>
  );
}
function AboutUspage() {
  return (
    <>
      <main>
      <Header />
      <AboutUs />
      <BottomTitle/>
      </main>
  
    </>
  );
}
export default App;

