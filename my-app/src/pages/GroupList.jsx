import React, { useEffect, useState } from 'react';

function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Obtener la lista de grupos desde el backend
    const fetchGroups = async () => {
      try {
        const response = await fetch('http://localhost:8083/api/groups', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setGroups(data);
        } else {
          console.error('Error al obtener la lista de grupos');
        }
      } catch (error) {
        console.error('Error al obtener la lista de grupos:', error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="group-list">
      <h2>Grupos</h2>
      {groups.length > 0 ? (
        groups.map(group => (
          <div key={group.id} className="group-item">
            <h3>{group.name}</h3>
            <p>Privacidad: {group.privado ? 'Privado' : 'Público'}</p>
            {group.imagen && <img src={group.imagen} alt={group.name} />}
          </div>
        ))
      ) : (
        <p>No hay grupos disponibles.</p>
      )}
    </div>
  );
}

export default GroupList;