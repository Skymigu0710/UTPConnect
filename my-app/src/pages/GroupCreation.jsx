import React, { useState } from 'react';
import '../styles/GroupCreation.css';

function GroupCreation({ onCreateGroup }) {
  // Estados locales para almacenar el nombre del grupo, la privacidad y la imagen
  const [localGroupName, setLocalGroupName] = useState('');
  const [localGroupPrivacy, setLocalGroupPrivacy] = useState('Public');
  const [localGroupImage, setLocalGroupImage] = useState(null);

  // Maneja la carga de la imagen y la convierte a una URL base64
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

  // Maneja la creación del grupo y envía los datos al backend
  const handleCreateGroup = async () => {
    if (localGroupName) {
      try {
        // Enviar datos al backend
        const response = await fetch('http://localhost:8081/api/groups', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: localGroupName,
            privado: localGroupPrivacy === 'Private', // Convertir a booleano
            imagen: localGroupImage,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          onCreateGroup(data.name, data.privado ? 'Private' : 'Public', data.imagen);
          alert('Grupo creado exitosamente');
        } else {
          const errorData = await response.json();
          console.error('Error al crear el grupo:', errorData);
          alert('Error al crear el grupo');
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Error al enviar la solicitud');
      }
    } else {
      alert('Por favor, ingresa un nombre para el grupo.');
    }
  };

  return (
    <div className="group-creation-page">
      <h3>Crear nuevo grupo</h3>
      {/* Campo de entrada para el nombre del grupo */}
      <input 
        type="text" 
        placeholder="Nombre del grupo" 
        value={localGroupName}
        onChange={(e) => setLocalGroupName(e.target.value)}
      />
      {/* Selector para la privacidad del grupo */}
      <select 
        value={localGroupPrivacy}
        onChange={(e) => setLocalGroupPrivacy(e.target.value)}
      >
        <option value="Public">Público</option>
        <option value="Private">Privado</option>
      </select>
      {/* Campo de entrada para la carga de la imagen */}
      <input 
        type="file" 
        onChange={handleImageUpload}
      />
      {/* Botón para crear el grupo */}
      <button onClick={handleCreateGroup}>Crear Grupo</button>
      {/* Vista previa de la imagen cargada */}
      {localGroupImage && (
        <div className="image-preview">
          <img src={localGroupImage} alt="Group" />
        </div>
      )}
    </div>
  );
}

export default GroupCreation;