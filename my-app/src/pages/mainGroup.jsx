import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter de Next.js
import GroupCreation from './GroupCreation';
import Menu from "../components/Menu";
import Grupos from '../components/Grupos';
import MuroPost from "../components/muroPost";
import styles from '../styles/profile.module.css'; // Importa los estilos del módulo CSS
import '../styles/MainGroup.css';

export default function MainGroup() {
    const [view, setView] = useState('create');
    const [groupName, setGroupName] = useState('');
    const [groupPrivacy, setGroupPrivacy] = useState('');
    const [groupImage, setGroupImage] = useState(null);
    const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones
    const router = useRouter(); // Inicializar el hook useRouter

    const handleCreateGroup = async (name, state, image) => {
        setGroupName(name);
        setGroupPrivacy(state);
        setGroupImage(image);
        setView('profile'); // Cambio a la vista de perfil de grupo

        // Enviar datos al backend
        const response = await fetch('http://localhost:8081/api/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                state,
                image,
            }),
        });

        if (response.ok) {
            console.log('Grupo creado exitosamente');
            const data = await response.json();
            const groupId = data.id_groups; // Sustituye esto con el ID real devuelto por el backend
            router.push(`/Groups/${groupId}`); // Redirige al perfil del grupo usando useRouter
        } else {
            console.error('Error al crear el grupo');
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.section} ${styles.static}`}>
                <Menu />
            </div>
            <div className={`${styles.section} ${styles.scrollable}`}>
                <div className="App">
                    {/* Encabezado */}
                    <header className="header">
                        <h1>UTPConnect</h1>
                    </header>

                    {/* Sección central scrollable, con contenido dinámico */}
                    <div className="section scrollable">
                        <div className="main-feed-container">
                            {/* Sección central */}
                            <div className="center-section">
                                <div className="space portada">
                                    {view === 'create' ? (
                                        <GroupCreation onCreateGroup={handleCreateGroup} />
                                    ) : (
                                        null)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.groupsconteiner}>
                <Grupos />
            </div>
        </div>
    );
}
