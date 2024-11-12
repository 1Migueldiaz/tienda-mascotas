// src/components/Product.js
import React, { useState } from 'react';

const Product = ({ product }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <button onClick={toggleDetails}>
                {showDetails ? 'Ocultar Información' : 'Mostrar Información'}
            </button>
            {showDetails && (
                <div className="product-details">
                    <p>Descripción: {product.description}</p>
                    <p>Cantidad: {product.quantity}</p>
                </div>
            )}
        </div>
    );
};

export default Product;