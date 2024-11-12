// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

    const handleBack = () => {
        navigate('/'); // Regresa a la página anterior
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form>
                <div>
                    <label>Correo Electrónico:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button onClick={handleBack}>Volver</button> 
        </div>
    );
};

export default Login;