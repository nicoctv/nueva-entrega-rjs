import React from "react";
import './navbar.css'
const Navbar = ({ handleCategoria }) =>{
    
   const cambiarCategoria = () =>{

   }
   
    return (
        <div className="navbar">
            <h1 onClick={() => cambiarCategoria ('all')}> Green Zone Grow Shop</h1>
            <p>Tierras</p>
            <p onClick={() => cambiarCategoria ('jewelery')}>Fertilizantes</p>
            <p onClick={() => cambiarCategoria ('electronics')}>Luces</p>
            <p>sedas</p>
            < CartWidget />
        </div>
    )
}

export default Navbar;
