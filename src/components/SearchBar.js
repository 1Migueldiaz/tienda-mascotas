// src/components/SearchBar.js
import React, { useState } from 'react';
import '../styles/ProductList.css';
import { FaSearch } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const SearchBar = ({ products, setFilteredProducts }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isVisible, setIsVisible] = useState(false); 

    const handleSearch = () => {
        let filtered = products;

        if (name) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter(product =>
                product.category && product.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (minPrice) {
            filtered = filtered.filter(product => product.price >= Number(minPrice));
        }

        if (maxPrice) {
            filtered = filtered.filter(product => product.price <= Number(maxPrice));
        }

        setFilteredProducts(filtered);
    };

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)} className="search-icon">
                <FaSearch />
            </button>
            {isVisible && (
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar por nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Seleccionar categoría</option>
                        <option value="perros">Perros</option>
                        <option value="gatos">Gatos</option>
                        <option value="aves">Aves</option>
                        <option value="peces">Peces</option>
                        <option value="reptiles">Reptiles</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Precio mínimo"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Precio máximo"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <button onClick={handleSearch}>Buscar</button>
                </div>
            )}
        </div>
    );
};

export default SearchBar;