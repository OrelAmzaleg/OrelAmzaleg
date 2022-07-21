import React from "react";
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvidor";
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from "./reducer";

function Subtotal(){
    const navigate = useNavigate();
    const [{basket},dispatch] = useStateValue();
    
    return(
     <div className="subtotal">
        <CurrencyFormat renderText={(value)=>(
        <>
        <p>
            Subtotal ({basket.length} items):<strong>{value}</strong>
        </p>
        <small className="subtotal_gift">
            <input type="checkbox"/> This order contains a gift
        </small>
        </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}/>
           <button onClick={e=>navigate('/paymentpage')}>Proceed to Checkout</button>
    </div>
 
);
}
export default Subtotal;