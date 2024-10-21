"use client";
import styles from '../styles/profile.module.css'; // Importa los estilos del módulo CSS
import { useRouter} from 'next/navigation'; // Importa useRouter
import React, { useState, useEffect } from 'react';
//importar módulos
import Studentsprofile from '../components/Studentsprofile';
import PostFeed from '../components/PostFeed';
import InformationFeed from '../components/InformationFeed';
import Profileoptions from '../components/Profileoptions';
//JOEL CODE
import Menu from '../components/Menu';
import Grupos from '../components/Grupos';

// Define la variable gato para la imagen
const gato = '/images/th.jpeg';
/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function Profile() {

  const router = useRouter(); // Llama a useRouter

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
        <Menu/>
      </div>
      <div className={`${styles.section} ${styles.scrollable}`}>
        <div className={styles.profile}>
        <div className="searchbarre">
            <input type="search" className="search-input" placeholder="Buscar grupos..." />     
        </div>
        <Studentsprofile gato={gato} userData={userData}/>
          <div className={styles.feed}>
          <Profileoptions components={[
              <PostFeed key="postfeed" userData={userData} />, 
              <InformationFeed key="informationfeed" userData={userData}/>
            ]}  />
          </div>
        </div>
        <div className={styles.responsfooter}>
        <Menu/>
        </div>
      </div>
      <div className={styles.groupsconteiner}>
            <Grupos gato={gato} />
      </div>
    </div>

  );
};
