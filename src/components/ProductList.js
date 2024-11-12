// src/components/ProductList.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import comidaPerros from '../assets/Dog_chow.png';
import comidaGatos from '../assets/Don_cat.jpeg';
import comidaAves from '../assets/Aburra.png';
import comidaPeces from '../assets/Nutripez.jpeg';
import comidaReptiles from '../assets/reptomind.jpeg';
import dog from '../assets/dog.png';
import collar from '../assets/collar.png';
import spa from '../assets/spa.png';
import plato from '../assets/plato.png';
import '../styles/ProductList.css';
import Modal from './Modal'; 
import SearchBar from './SearchBar';

const products = [
    { id: 1, name: 'Dog Chow', price: 2000, image: comidaPerros, description: 'Purina® DOG CHOW® Adulto con Pollo, es una nutrición adaptada para perros adultos que incluye vitaminas y minerales esenciales para apoyar huesos saludables y altos niveles de proteínas y grasas para mantener el mantenimiento muscular.', quantity: 10 },
    { id: 2, name: 'Don Kat', price: 2000, image: comidaGatos, description: 'Donkat es un alimento 100% completo y balanceado para gaticos menores de 1 año de todas las razas. Además de tener un delicioso sabor contiene los nutrientes necesarios para fortalecer el sistema óseo, el sistema muscular y mantener un pelaje brillante y la piel sana.', quantity: 5 },
    { id: 3, name: 'Alpiste Aburra', image: comidaAves, price: 2000, description: 'Alimento balanceado para aves.', quantity: 20 },
    { id: 4, name: 'Nutri Pez', image: comidaPeces, price: 2000, description: '¡Bienvenido al mundo de Nutripez, el alimento para peces que destaca por su calidad y beneficios para tus mascotas acuáticas! Nutripez se caracteriza por ofrecer una nutrición balanceada que garantiza el bienestar, crecimiento y desarrollo saludable de tus peces.', quantity: 15 },
    { id: 5, name: 'Repto Mind', image: comidaReptiles, price: 2000, description: 'ReptoMin es un alimento completo equilibrado y rico en nutrientes para tortugas adultas. El alimento está elaborado con ingredientes naturales y favorece una digestión saludable.', quantity: 8 },
    { id: 6, name: 'Servicio medico', image: dog, price: 2000, description: 'Servicio médico para mascotas.', quantity: 8 },
    { id: 7, name: 'Collar para perro o gatos', price: 2000, image: collar, description: 'Collar para mascotas.', quantity: 8 },
    { id: 8, name: 'SPA para tu animalito', price: 2000, image: spa, description: 'SPA para mascotas.', quantity: 8 },
    { id: 9, name: 'Tazon de comida', price: 2000, image: plato, description: 'Tazón de comida para mascotas de cualquier clase.', quantity: 8 },
];

const ProductList = () => {
    const { dispatch } = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const navigate = useNavigate(); // Inicializa useNavigate

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const showInfo = (product) => {
        if (product.name === 'SPA para tu animalito') {
            // Redirige al formulario de SPA
            navigate('/booking'); // Cambia '/booking' por la ruta correcta de tu formulario de SPA
        } else {
            setSelectedProduct(product);
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="product-list">
            <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
            {filteredProducts.map(product => (
                <div className="product-item" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    {product.name === 'SPA para tu animalito' ? (
                        <button onClick={() => navigate('/booking')}>Reserva tu SPA</button>
                    ) : (
                        <>
                            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                            <button onClick={() => showInfo(product)}>Información</button>
                        </>
                    )}
                </div>
            ))}
            <Modal isOpen={modalOpen} onClose={closeModal} product={selectedProduct} />
        </div>
    );
};

export default ProductList;