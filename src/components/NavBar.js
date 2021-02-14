import React from 'react'
import {NavLink} from 'react-router-dom'
const navBar = (props) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Menu</NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <button className="btn btn-primary m-2">{props.items}</button>
            </div>
        </nav>
    )
    
}


export default navBar