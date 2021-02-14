import React from 'react'
import MenuProduct from './menuProduct'
const menu = (props)=>{
    return (
        <div className="container">
            <h1>Menu</h1>
            <table className="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {props.products.map((product,index) =>{
                   return <MenuProduct key={product.id} 
                                       id={product.id} 
                                       buy={()=>props.buy(index)}     
                                       isInCart={product.isInCart} 
                                       price={product.price} 
                                       name={product.name} 
                                       quantity={product.quantity}></MenuProduct>
                })}
            </tbody>
            </table>
            
        </div>
    )
}

export default menu