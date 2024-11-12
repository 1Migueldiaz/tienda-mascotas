// src/CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    items: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Si el artículo ya existe, incrementa la cantidad
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            // Si no existe, agrega el nuevo artículo con cantidad 1
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };

        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };

        default:
            console.warn(`Acción no reconocida: ${action.type}`);
            return state;
    }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto
export const useCart = () => {
    return useContext(CartContext);
};