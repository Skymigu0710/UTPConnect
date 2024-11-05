import React, { useState } from "react";
<<<<<<< HEAD
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa"; // Añadimos los íconos de ojo
import { useRouter } from 'next/navigation'; 
=======
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Importa useRouter
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
import '../styles/LoginRegister.css';

const LoginRegister = () => {
    const router = useRouter();

    const router = useRouter(); // Llama a useRouter

    const [action, setAction] = useState('');
<<<<<<< HEAD
    const [username, setUsername] = useState('');
    const [name, setName]=useState('');
    const [last_name, setLast_name]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar si la contraseña es visible

    const registerLink = () => setAction('active');
    const loginLink = () => setAction('');

    // Alternar entre mostrar y ocultar la contraseña
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
=======

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerLink = () => {
        setAction('active');
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = { username, name, last_name,email, password };

        try {
            const response = await fetch('http://localhost:8084/auth/register', {
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
            console.log(data);

            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // Redirigir al formulario de inicio de sesión después del registro
            loginLink();

        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { username: username, password: password };

        try {
            const response = await fetch('http://localhost:8084/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Error en el inicio de sesión');
            }

            const data = await response.json();
            console.log(data);

            localStorage.setItem('token', data.token);
            localStorage.setItem('userDetails', JSON.stringify(data.userDetails));
            router.push('/Profile');

        } catch (error) {
            console.error(error);
        }
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
<<<<<<< HEAD
                            <FaUser className="icon-left" />
=======
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                            <input
                                type="text"
                                placeholder="Nombre de usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
<<<<<<< HEAD
=======
                            <FaUser className="icon" />
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                        </div>

                        <div className="input-box">
<<<<<<< HEAD
                            <FaLock className="icon-left" />
                            <input
                                type={showPassword ? "text" : "password"} // Condicional para mostrar u ocultar la contraseña
                                placeholder="Contraseña"
=======
                            <input
                                type="password"
                                placeholder="contraseña"
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
<<<<<<< HEAD
                            <span onClick={toggleShowPassword} className="password-toggle-icon">
                                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icono para mostrar u ocultar */}
                            </span>
=======
                            <FaLock className="icon" />
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                        </div>
                        
                        <div className="remember-forgot">
                            <label> <input type="checkbox" />recordarme </label>
                            <a href="#"> ¿Has olvidado tu contraseña?</a>
                        </div>
<<<<<<< HEAD

                        <button type="submit">Ingresar</button>

=======
                        <button type="submit">Ingresar</button>
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                        <div className="register-link">
                            <p>¿No tienes una cuenta? <a href="#" onClick={registerLink}>Registrarse</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>Registro</h1>

                        <div className="input-box">
<<<<<<< HEAD
                            <FaUser className="icon-left" />
                            <input
                                type="text"
                                placeholder="Usuario"
=======
                            <input
                                type="text"
                                placeholder="Nombre de usuario"
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
<<<<<<< HEAD
                        </div>
                        <div className="input-box">
                            <FaUser className="icon-left" />
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <FaUser className="icon-left" />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                value={last_name}
                                onChange={(e) => setLast_name(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <FaEnvelope className="icon-left" />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <FaLock className="icon-left" />
                            <input
                                type={showPassword ? "text" : "password"} // Condicional para mostrar u ocultar la contraseña
=======
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
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
<<<<<<< HEAD
                            <span onClick={toggleShowPassword} className="password-toggle-icon">
                                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icono para mostrar u ocultar */}
                            </span>
=======
                            <FaLock className="icon" />
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Acepto los términos y condiciones</label>
                        </div>
                        <button type="submit">Registrarse</button>
                        <div className="register-link">
                            <p>¿Ya tienes una cuenta? <a href="#" onClick={loginLink}>Iniciar sesión</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
