// src/components/Register.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'; 

const Register = () => {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h2>Registrarse</h2>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Correo Electrónico:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            <button onClick={handleBack}>Volver</button> 
        </div>
    );
};

export default Register;