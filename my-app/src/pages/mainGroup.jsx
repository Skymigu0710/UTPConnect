import React, { useState } from 'react';
import GroupCreation from './GroupCreation';
import GroupProfile from './GroupProfile';
import Menu from "../components/menu";
import MuroPost from "../components/muroPost";
import '../styles/MainGroup.css';

export default function MainGroup() {
  const [view, setView] = useState('create');
  const [groupName, setGroupName] = useState('');
  const [groupPrivacy, setGroupPrivacy] = useState('');
  const [groupImage, setGroupImage] = useState(null);
  const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones

  const handleCreateGroup = async (name, privacy, image) => {
    setGroupName(name);
    setGroupPrivacy(privacy);
    setGroupImage(image);
    setView('profile'); // Cambio a la vista de perfil de grupo

    // Enviar datos al backend
    const response = await fetch('https://tu-backend.com/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        privacy,
        image,
      }),
    });

    if (response.ok) {
      console.log('Grupo creado exitosamente');
    } else {
      console.error('Error al crear el grupo');
    }
  };

  const handleBackToCreation = () => {
    setView('create'); // Volvemos a la vista de creación de grupo
  };

  return (
    <div className="App">
      {/* Encabezado */}
      <header className="header">
        <h1>UTPConnect</h1>
      </header>
      
      {/* Sección central scrollable, con contenido dinámico */}
      <div className="section scrollable">
        <div className="main-feed-container">
          {/* Sidebar izquierdo */}
          <div className="left-section">
            <Menu />
          </div>

          {/* Sección central */}
          <div className="center-section">
            <div className="space portada">
              {view === 'create' ? (
                <GroupCreation onCreateGroup={handleCreateGroup} />
              ) : (
                <GroupProfile 
                  groupName={groupName}
                  groupPrivacy={groupPrivacy}
                  groupImage={groupImage}
                  onBackToCreation={handleBackToCreation}
                />
              )}
            </div>
            {/* Incluir MuroPost aquí si es necesario */}
            <MuroPost posts={posts} />
          </div>

          {/* Sidebar derecho */}
          <div className="right-section">
            {/* Contenido del sidebar derecho */}
          </div>
        </div>
      </div>

      {/* Sección estática inferior */}
      <div className="section static">
      </div>
    </div>
  );
}