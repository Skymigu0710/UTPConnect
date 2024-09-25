"use client";
import React from 'react';
import styles from '../styles/profile.module.css'; // Importa los estilos del módulo CSS
//importar módulos
import StudentsProfile from '../components/Studentsprofile';
import PostFeed from '../components/PostFeed';
import InformationFeed from '../components/InformationFeed';
import ProfileOptions from '../components/Profileoptions';
//JOEL CODE
import Menu from '../components/Menu';
import Groups from '../components/Grupos';


// Define la variable gato para la imagen
const gato = '/images/th.jpeg';
/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function Profile() {

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
        <StudentsProfile gato={gato} />
          <div className={styles.feed}>
          <ProfileOptions components={[
              <PostFeed key="postfeed" />, 
              <InformationFeed key="informationfeed" />
            ]}  />
          </div>
        </div>
        <Groups gato={gato} />
      </div>

    </div>
  );
};
