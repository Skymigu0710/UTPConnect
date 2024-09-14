import React, { useState } from 'react';
import GroupCreation from './GroupCreation.jsx';
import GroupProfile from './GroupProfile.jsx';
import '../styles/MainGroup.css';
function App() {
    const [groupName, setGroupName] = useState('');
    const [groupPrivacy, setGroupPrivacy] = useState('Public');
    const [groupImage, setGroupImage] = useState(null);
    const [view, setView] = useState('create'); // Estado para manejar qué vista mostrar
  
    const handleCreateGroup = (name, privacy, image) => {
      setGroupName(name);
      setGroupPrivacy(privacy);
      setGroupImage(image);
      setView('profile'); // Cambio a la vista de perfil de grupo
    };
  
    const handleBackToCreation = () => {
      setView('create'); // Volvemos a la vista de creación de grupo
    };
  
    return (
      <div className="App">
        {/* Sección estática superior */}
        <div className="section static">
        </div>
        
        {/* Sección central scrollable, con contenido dinámico */}
        <div className="section scrollable">
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
        </div>
  
        {/* Sección estática inferior */}
        <div className="section static">
          Sec2
        </div>
      </div>
    );
  }
  
  export default App;