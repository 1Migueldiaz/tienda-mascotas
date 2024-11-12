// src/components/BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../styles/BookingForm.css';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Reserva confirmada para ${serviceType} el ${date} a las ${time}.`);
        setDate('');
        setTime('');
        setServiceType('');
    };

    const handleBack = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h2>Reserva un Servicio para tu Mascota</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="serviceType">Tipo de Servicio:</label>
                    <select
                        id="serviceType"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                    >
                        <option value="">Selecciona un servicio</option>
                        <option value="Baño">Baño</option>
                        <option value="Corte de Pelo">Corte de Pelo</option>
                        <option value="Spa">Spa</option>
                        <option value="Entrenamiento">Entrenamiento</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Fecha:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Hora:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reservar</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={handleBack}>Volver</button>
        </div>
    );
};

export default BookingForm;