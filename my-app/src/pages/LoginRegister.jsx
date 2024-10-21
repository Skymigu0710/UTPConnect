import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Importa useRouter
import '../styles/LoginRegister.css';


const LoginRegister = () => {

    const router = useRouter(); // Llama a useRouter

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
            // Si el backend devuelve un token después del registro, puedes almacenarlo también
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // redirigir al usuario 
            router.push('/Profile'); // Redirige a la página de dashboard

        } catch (error) {
            console.error(error);
            // Maneja el error (puedes mostrar un mensaje al usuario)
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { username: username, password: password };

        try {
            const response = await fetch('http://localhost:8083/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Error en el inicio de sesión');
            }

            const data = await response.json();
            console.log(data);
            // Almacenar el token en localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('userDetails', JSON.stringify(data.userDetails)); // Asegúrate de que 'userDetails' sea parte de la respuesta
            // Redirigir a otra ventana (puedes cambiar la URL)
            router.push('/Profile');

        } catch (error) {
            console.error(error);
            // Maneja el error (puedes mostrar un mensaje al usuario)
        }
    };
    return (
        <div className="Logincontent">
            <div className={`wrapper ${action}`}>
                <div className="form-box login">
                    <form onSubmit={handleLogin}>
                        <h1>Inicio de sesión</h1>
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
                                type="password"
                                placeholder="contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label> <input type="checkbox" />recordarme </label>
                            <a href="#"> ¿Has olvidado tu contraseña?</a>
                        </div>
                        <button type="submit">Ingresar</button>
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