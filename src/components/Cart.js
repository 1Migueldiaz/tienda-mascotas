// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { state, dispatch } = useCart();

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const handleQuantityChange = (item, quantity) => {
        if (quantity < 1) return; // Evitar cantidades negativas
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
    };

    const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {state.items.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {state.items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x 
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                            />
                            <button onClick={() => removeFromCart(item)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;