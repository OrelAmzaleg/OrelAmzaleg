import React, { useState } from 'react'
import './Prod.css';
import {useStateValue} from "./StateProvidor"

function Prod({id,title,disc,img,price,rating}) {
const [state, dispatch] = useStateValue();

  const addToBasket = () =>{
  dispatch({
    type:'ADD_TO_BASKET',
    item: {
      id:id,
      title:title,
      disc:disc,
      img:img,
      rating:rating,
      price: price,
     
    },
  });
};
  return (
     <div className='prod'>
       <img src={img} alt=""/>
      <div className='prod_title'>
        <p>{title}</p>
        </div>
        <div className='prod_disc'>
      
        <p className='prod_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='prod_rating'>
            {Array(rating).fill().map((_, i)=>(<p>⭐</p>))}
        </div>
      </div>
     
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Prod
