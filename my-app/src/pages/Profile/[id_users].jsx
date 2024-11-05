"use client";
import styles from '../../styles/profile.module.css'; // Importa los estilos del módulo CSS
import { useRouter } from 'next/router'; // Importa useRouter
import React, { useState, useEffect } from 'react';
//importar módulos
import Studentsprofile from '../../components/Studentsprofile';
import PostFeed from '../../components/PostFeed';
import InformationFeed from '../../components/InformationFeed';
import Profileoptions from '../../components/Profileoptions';
import EditProfile from '../../components/EditProfile';

//JOEL CODE
import Menu from '../../components/Menu';
import Grupos from '../../components/Grupos';

const gato = '/images/th.jpeg';
/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} El componente renderizado.
 */

export default function Profile() {
 
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); 
  const { id_users } = router.query;
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario
 
  
  useEffect(() => {
    if (!id_users) return; // Asegúrate de que id_users esté definido antes de realizar la solicitud

    // Intenta obtener el token y los detalles del usuario desde localStorage
    const token = localStorage.getItem('token');
  
    if (!token) {
      // Si no hay token, redirige al login o maneja el error
      router.push('/LoginRegister'); // Descomenta esta línea si necesitas redirigir
      console.error('No se encontró token, redirigiendo al login');
      return;
    }
  
    // Llama a la API para obtener los datos del usuario
    const fetchUserData = async () => {
      try {
          const response = await fetch(`http://localhost:8082/api/users/${id_users}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          if (!response.ok) {
              throw new Error('Error al obtener los datos del usuario');
          }

          const data = await response.json();
          setUserData(data); // Actualiza el estado con los datos del nuevo usuario
          setError(null);
      } catch (error) {
          console.error('Error al cargar el perfil:', error);
          setError(error);
      }
  };

  fetchUserData();
}, [id_users]); // El efecto se ejecutará cada vez que id_users cambie

  if (!userData) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar el perfil: {error.message}</div>;
}
  const handleEditButtonClick = () => {
    setShowForm(true);
  };
  const handleCancel = () => {
    setShowForm(false);
};

  return (
    <div className={styles.container}>
       {showForm && <EditProfile handleCancel={handleCancel} />}
      <div className={`${styles.section} ${styles.static}`}>
        <Menu />
      </div>
      <div className={`${styles.section} ${styles.scrollable}`}>
        <div className={styles.profile}>
          <div className="searchbarre">
            <input type="search" className="search-input" placeholder="Buscar grupos..." />
          </div>
          <Studentsprofile gato={gato} userData={userData} handleclick={handleEditButtonClick} />
          <div className={styles.feed}>
            <Profileoptions components={[
              <PostFeed key="postfeed" userData={userData} />,
              <InformationFeed key="informationfeed" userData={userData} />
            ]} />

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
};
