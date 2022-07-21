import React from "react";
import CheckOutProd from "./CheckOutProd";
import './Payment.css';
import { useStateValue } from "./StateProvidor";
import { Routes, Route, Link } from "react-router-dom";


function Payment(){

    const [{basket,user},dispatch] = useStateValue();

    return(
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout(<Link to ="/checkoutpage">{basket?.length}items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="patment_address">
                        <p>{user?.email}</p>
                        <p>street add</p>
                        <p>City , country</p>
                    </div>
                </div>
                <div className="payment_section">
                <div className="payment_title">
                   <h3>Review items and Delivery</h3> 
                    </div>
                    <div className="payment_items">
                        {basket.map(item=>(
                            <CheckOutProd
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            disc={item.disc}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}    
                    </div>
                </div>
                <div className="payment_section">
                            <div className="payment_title">
                                <h3>Payment Methode</h3>
                                <div className="payment_mothod">
                              
                               </div>
                            </div>
                            <div className="payment_details">
                                <form>
                                <input type="radio"/> VISA
                                <input type="radio"/> MasterCard
                                <input type="radio"/> AMEX
                                </form>
                                <br/>
                                <form>
                                 <p> Card Holder  </p>   <input type="text"/>
                                 <p>Card Number</p> <input type="number"/> 
                                 <p>Date Expire</p>   <input type="date"/>
                                 <button onSubmit={""}>PAY</button> 
                                </form>
                           
                            </div>
                    </div>        
            </div>
        </div>
    )
}
export default Payment;