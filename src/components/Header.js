// src/components/Header.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartDropdown from './CartDropdown'; 
import '../styles/Header.css';

const Header = () => {
    const { state } = useCart();

    return (
        <header className="header">
            <h1>Tienda de Mascotas</h1>
            <div className="cart-icon">
                <CartDropdown /> 
                {state.items.length > 0 && <span className="cart-count">{state.items.length}</span>}
            </div>
            <nav className="header-nav">
                <Link to="/login">
                    <i className="fa fa-user" aria-hidden="true" title="Iniciar sesión"></i>
                </Link>
                <Link to="/register">
                    <i className="fa fa-user-plus" aria-hidden="true" title="Registrarse"></i>
                </Link>
                <Link to="/booking"> 
                    <i className="fa fa-calendar" aria-hidden="true" title="Reservar Servicio"></i>
                </Link>
            </nav>
        </header>
    );
};

export default Header;