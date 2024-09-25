"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/profile.module.css'; // Importa los estilos del módulo CSS
//importar módulos
import StudentsProfile from '../components/Studentsprofile';
import PostFeed from '../components/PostFeed';
import InformationFeed from '../components/InformationFeed';
import ProfileOptions from '../components/Profileoptions';
//JOEL CODE
import Menu from '../components/menu';
import Groups from '../components/grupos';


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
          <ProfileOptions components={[<PostFeed/> ,<InformationFeed /> ]} />
          </div>
        </div>
        <Groups gato={gato} />
      </div>

    </div>
  );
};
