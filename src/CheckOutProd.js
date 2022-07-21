import React from "react";
import './CheckOutProd.css'
import { useStateValue } from "./StateProvidor";

function CheckOutProd({id,img,title,disc,price,rating}){
    const [{basket},dispatch] = useStateValue();
    const removeFromBsket=()=>{
     dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return(
    <div className="checkoutProd">
        <img className = 'checkutProd_img' src={img}/>
        <div className="checkoutProd_info">
            <p className='chekoutProd_title'>{title}</p>
            <p className='chekoutProd_disc'>{disc}</p>
            <p className="checkoutProd_price">
              <small>$</small>
              <strong>{price}</strong>
              </p>
            <div className="checkoutProd_rating">
              {Array(rating).fill().map((_, i)=>(<p>⭐</p>))}
           
             </div>
             <button onClick={removeFromBsket}>Remove this item</button>
        </div>   
    </div>
    )
}

export default CheckOutProd;