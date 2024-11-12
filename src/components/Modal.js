// src/components/Modal.js
import React from 'react';
import '../styles/Modal.css'; 

const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{product.name}</h2>
                <p><strong>Descripción:</strong> {product.description}</p>
                <p><strong>Cantidad:</strong> {product.quantity}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;