"use client";
import styles from '../../styles/group.module.css'; // Importa los estilos del módulo CSS
import { useRouter } from 'next/router'; // Importa useRouter
import React, { useState, useEffect } from 'react';
// Importar módulos
import GroupDetails from '../../components/GroupDetails';
import Menu from '../../components/Menu';

export default function GroupProfile() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id_group } = router.query;
  const [groupData, setGroupData] = useState(null); // Estado para almacenar los datos del grupo

  useEffect(() => {
    if (!id_group) return; // Asegúrate de que id_group esté definido antes de realizar la solicitud

    // Intenta obtener el token desde localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay token, redirige al login o maneja el error
      router.push('/LoginRegister'); // Descomenta esta línea si necesitas redirigir
      console.error('No se encontró token, redirigiendo al login');
      return;
    }

    // Llama a la API para obtener los datos del grupo
    const fetchGroupData = async () => {
      try {
        const response = await fetch(`http://localhost:8083/api/groups/${id_group}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos del grupo');
        }

        const data = await response.json();
        setGroupData(data); // Actualiza el estado con los datos del grupo
        setError(null);
      } catch (error) {
        console.error('Error al cargar el perfil del grupo:', error);
        setError(error);
      }
    };

    fetchGroupData();
  }, [id_group]); // El efecto se ejecutará cada vez que id_group cambie

  if (!groupData) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar el perfil del grupo: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.static}`}>
        <Menu />
      </div>
      <div className={`${styles.section} ${styles.scrollable}`}>
        <div className={styles.profile}>
          <GroupDetails groupData={groupData} />
        </div>
      </div>
    </div>
  );
}