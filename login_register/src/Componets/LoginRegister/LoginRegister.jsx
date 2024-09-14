import React, {useState} from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './LoginRegister.css';

const LoginRegister = () => {

    const[action, setAction] = useState('');
    
    const registerLink = () => {
        setAction('active');
    };
    const loginLink = () => {
        setAction('');
    };

    return(
    <div className ={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Inicio de sesión</h1>
                <div className="input-box">
                    <input type="text" placeholder="Nombre de usuario" requiered />
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="contraseña" requiered />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>recordarme </label>
                    <a href="#"> ¿Has olvidado tu contraseña?</a>
                </div>
                <button type="submit">Ingresar</button>
                <div className="register-link">
                    <p>¿No tienes una cuenta? <a href="#" onClick={registerLink}>Registrarse</a> </p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registro</h1>
                <div className="input-box">
                    <input type="text" placeholder="Nombre de usuario" requiered />
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="correo electronico" requiered />
                    <FaEnvelope  className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Contraseña" requiered />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>Acepto los términos y condiciones</label>
                </div>
                <button type="submit">Registrarse</button>
                <div className="register-link">
                    <p>¿Ya tienes una cuenta? <a href="#" onClick={loginLink}>Iniciar sesión</a> </p>
                </div>
            </form>
        </div>
    </div>
    );
};
export default LoginRegister;