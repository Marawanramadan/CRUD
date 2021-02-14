import React from 'react'
const menuProduct = (props) => {
        const classes = props.isInCart ? {color:"grey"} : {color:"black"}
        return (

            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td><i style={classes} onClick={props.buy} className="fas fa-cart-plus"></i></td>
            </tr>
        )
    
}

export default menuProduct;