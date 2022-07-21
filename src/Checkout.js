import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvidor";
import Subtotal from "./Subtotal";
import CheckOutProd from "./CheckOutProd";

function Checkout(){
    const [{basket,user},dispatch] = useStateValue();

    return (
    <div className='checkout'>
   <div className="checkout_left">
     <img className="checkout_ads" src="https://www.cigarhumidors-online.com/media/wysiwyg/banner2.jpg"alt=""/>
     <Subtotal/>   
     <div>
        <h3>{user? 'Hello ' + user.email + ' Wellcom back! ':'Hello Guest Please sign In'}</h3>
        <h2 className="checkout_title">{user? 'Your Shoping Basket ':''}</h2>
      {basket.map(item =>(<CheckOutProd 
      id={item.id} 
      img={item.img}
      title={item.title}
      disc={item.disc}
      price={item.price}
      rating={item.rating}
 
      />))}
        </div>
    </div>
        <div className="checkout_right">
           
        </div>
</div>
    )
}
export default Checkout;