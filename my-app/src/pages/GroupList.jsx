// pages/group-list.jsx
import React from 'react';
import { useRouter } from 'next/router';
import styless from '../../src/styles/GroupList.module.css'; // Asegúrate de que el archivo exista
import styles from '../styles/profile.module.css'; // Importa los estilos del módulo CSS
import Menu from "../components/Menu";
import Grupos from '../components/Grupos';

function GroupList({ groups }) {
    const router = useRouter();

    const handleGroupClick = (id) => {
        router.push(`/Groups/${id}`);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.section} ${styles.static}`}>
                <Menu />
            </div>
            <div className={`${styles.section} ${styles.scrollable}`}>
                <div className={styless.groupList}>
                    <h1>Grupos</h1>
                    <div className={styless.groupCards}>
                        {groups.length > 0 ? (
                            groups.map((group) => (
                                <div
                                    key={group.id}
                                    className={styless.groupCard}
                                    onClick={() => handleGroupClick(group.id_groups)}
                                    styless={{ cursor: 'pointer' }}
                                >
                                    <h2>{group.name}</h2>
                                    <p>{group.state}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hay grupos disponibles.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.groupsconteiner}>
                <Grupos />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:8081/api/groups'); // Cambia la URL si es necesario
        const data = await res.json();

        return {
            props: {
                groups: data, // Pasa los grupos al componente como props
            },
        };
    } catch (error) {
        console.error('Error al obtener los grupos:', error);
        return {
            props: {
                groups: [], // Si hay un error, se pasan grupos vacíos
            },
        };
    }
}

export default GroupList;
