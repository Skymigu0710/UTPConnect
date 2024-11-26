import React, { useState, useEffect} from 'react';
import { useRouter} from 'next/navigation'; // Importa useRouter
import styles from "../styles/profile.module.css";
import Menu from "../components/Menu";
import Grupos from "../components/Grupos";
import PostFeed from '../components/PostFeed';

const gato = '/images/th.jpeg';

export default function App() {

    const router = new useRouter();

    
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario
    useEffect(() => {
      // Intenta obtener el token y los detalles del usuario desde localStorage
      const token = localStorage.getItem('token');
      const storedUserDetails = localStorage.getItem('userDetails');
      if (!token) {
        // Si no hay token, redirige al login o maneja el error
        router.push('/LoginRegister'); // Descomenta esta línea si necesitas redirigir
        console.error('No se encontró token, redirigiendo al login');
        return;
      }
      if (storedUserDetails) {
        // Si hay detalles del usuario almacenados, configúralos en el estado
        setUserData(JSON.parse(storedUserDetails));
      } else {
        console.error('No se encontraron detalles del usuario en localStorage');
        // Aquí puedes hacer una solicitud al backend si es necesario
      }
    }, []);
    if (!userData) {
      return <div>Cargando...</div>; // Muestra un mensaje mientras se cargan los datos
    }
    
    return (
        <div className={styles.container}>
            <div className={`${styles.section} ${styles.static}`}>
                <Menu />
            </div>
            < div className={`${styles.section} ${styles.scrollable}`}>
                <div className={styles.profile}>
                    <div className="searchbarre">
                        <input type="search" className="search-input" placeholder="Buscar grupos..." />
                    </div>
                    <div className={styles.feed}>
                        <PostFeed userData={userData}/>
                    </div>
                </div>
                
                <div className={styles.responsfooter}>
                    <Menu />
                </div>
            </div>
            <div className={styles.groupsconteiner}>
                <Grupos gato={gato} />
            </div>
        </div>
    );
}

