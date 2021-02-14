import React from "react";
import Product from './Product'
const ShoppingCart = (props) =>{
        return(
            <div className="container">
                <h3>Shopping Cart</h3>
                <button onClick={props.reset} className="btn btn-danger m-2">Reset</button>
                {props.products.map((product,index) =>{
                   return <Product key={product.id} id={product.id} increment={()=>props.increment(index)} isInCart={product.isInCart} deleted={()=>props.deleted(index)} name={product.name} quantity={product.quantity}></Product>
                })}
            </div>
        )
    
}


export default ShoppingCart