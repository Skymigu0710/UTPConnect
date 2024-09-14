import React, { useState } from 'react';
import './styles/GroupCreation.module.css';

function GroupCreation({ onCreateGroup }) {
  const [localGroupName, setLocalGroupName] = useState('');
  const [localGroupPrivacy, setLocalGroupPrivacy] = useState('Public');
  const [localGroupImage, setLocalGroupImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalGroupImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateGroup = () => {
    if (localGroupName) {
      onCreateGroup(localGroupName, localGroupPrivacy, localGroupImage);
    } else {
      alert('Por favor, ingresa un nombre para el grupo.');
    }
  };

  return (
    <div className="group-creation-page">
      <h3>Crear nuevo grupo</h3>
      <input 
        type="text" 
        placeholder="Nombre del grupo" 
        value={localGroupName}
        onChange={(e) => setLocalGroupName(e.target.value)}
      />
      <select 
        value={localGroupPrivacy}
        onChange={(e) => setLocalGroupPrivacy(e.target.value)}
      >
        <option value="Public">Público</option>
        <option value="Private">Privado</option>
      </select>

      {/* Input para subir la imagen */}
      <input 
        type="file" 
        accept="image/*"
        onChange={handleImageUpload}
      />

      {/* Previsualización de la imagen */}
      {localGroupImage && (
        <div className="image-preview">
          <img src={localGroupImage} alt="Preview" />
        </div>
      )}

      <button onClick={handleCreateGroup}>
        Crear grupo
      </button>
    </div>
  );
}

export default GroupCreation;
