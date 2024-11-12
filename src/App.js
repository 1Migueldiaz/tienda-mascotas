// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login'; 
import Register from './components/Register';
import BookingForm from './components/BookingForm';
import './App.css';


const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/booking" element={<BookingForm />} /> 
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;