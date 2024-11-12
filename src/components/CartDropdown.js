// src/components/CartDropdown.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartDropdown.css';
import Cart from './Cart'; 

const CartDropdown = () => {
    const { state } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="cart-dropdown">
            <button onClick={toggleDropdown} className="cart-button">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> 
                {isOpen ? ' Cerrar Carrito' : ' Abrir Carrito'} ({state.items.length})
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <Cart /> 
                </div>
            )}
        </div>
    );
};

export default CartDropdown;