import React from 'react'
import {Link} from 'react-router-dom'
const product = (props) => {
        const classes = props.quantity > 0 ? "badge badge-primary m-2" : "badge badge-warning m-2"
        return (
            <div className="row">
                <div className="col-2">
                <Link to={`/products/${props.id}`}><span>{props.name}</span></Link>
                </div>
                <div className="col">
                    <span className={classes}>{props.quantity}</span>
                    <button onClick={props.increment} className="btn btn-primary m-2">+</button>
                    <i onClick={props.deleted} className="fas fa-trash m-2"></i>
                </div>

            </div>
        )
    
}

export default product;