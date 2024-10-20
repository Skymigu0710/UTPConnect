import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import '../styles/LoginRegister.css';


const LoginRegister = () => {

    const [action, setAction] = useState('');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerLink = () => {
        setAction('active');
    };
    const loginLink = () => {
        setAction('');
    };

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const userData = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch(' http://localhost:8083/auth/register', {  // Cambia la URL según tu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Error en el registro');
            }

            const data = await response.json();
            console.log(data); // Maneja la respuesta según sea necesario
            // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
        } catch (error) {
            console.error(error);
            // Maneja el error (puedes mostrar un mensaje al usuario)
        }
    };
    return (
        <div className="Logincontent"> 
            <div className={`wrapper ${action}`}>
                <div className="form-box login">
                    <form action="">
                        <h1>Inicio de sesión</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre de usuario" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password"
                                placeholder="contraseña" required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label> <input type="checkbox" />recordarme </label>
                            <a href="#"> ¿Has olvidado tu contraseña?</a>
                        </div>
                        <button type="button" >Ingresar</button>
                        <div className="register-link">
                            <p>¿No tienes una cuenta? <a href="#" onClick={registerLink}>Registrarse</a> </p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>Registro</h1>
                        <div className="input-box">
                        <input 
                                type="text" 
                                placeholder="Nombre de usuario" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input 
                                type="email" 
                                placeholder="correo electronico" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input 
                                type="password"
                                placeholder="Contraseña" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label> <input type="checkbox" />Acepto los términos y condiciones</label>
                        </div>
                        <button type="submit">Registrarse</button>
                        <div className="register-link">
                            <p>¿Ya tienes una cuenta? <a href="#" onClick={loginLink}>Iniciar sesión</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};
export default LoginRegister;