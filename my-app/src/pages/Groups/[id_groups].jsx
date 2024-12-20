import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter para obtener el ID desde la URL
import '../../../src/styles/GroupProfile.css';
import styles from '../../styles/profile.module.css'; // Importa los estilos del módulo CSS

import Menu from '../../components/Menu';
import Grupos from '../../components/Grupos';
function GroupProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [groupDetails, setGroupDetails] = useState({
    name: '',
    privacy: '',
    image: '',
  });

  const router = useRouter(); // Usamos el hook useRouter
  const { id_groups } = router.query; // Extraemos el groupId de la URL
  // Comprobamos el valor de id_groups con un console.log
  useEffect(() => {
    if (!id_groups) return; // Asegúrate de que groupId esté disponible antes de hacer la petición

    const fetchGroupDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/groups/${id_groups}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Verifica la respuesta de la API
        if (response.ok) {
          const data = await response.json();
          console.log('Datos del grupo:', data); // Verifica los datos que llegan

          setGroupDetails(data);
          setPosts(data.publications || []); // Asumiendo que los posts vienen en la respuesta
        } else {
          console.error('Error al obtener los detalles del grupo', response.status);
        }
      } catch (error) {
        console.error('Error al obtener los detalles del grupo:', error);
      }
    };

    fetchGroupDetails();
  }, [id_groups]);

  const toggleFollowGroup = () => {
    setIsFollowing(!isFollowing);
  };

  const handleNewPostImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPost = async () => {
    if (!newPostContent) {
      alert('Por favor, escribe algo para publicar.');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      image: newPostImage,
    };

    // Actualizar el estado local inmediatamente
    setPosts([...posts, newPost]);
    setNewPostContent('');
    setNewPostImage(null);

    // Enviar datos al backend
    const response = await fetch(`http://localhost:8081/api/publications/${id_groups}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      console.error('Error al agregar la publicación');
    }
  };

  const handleBackToCreation = () => {
    // Redirigir a la página de creación de grupo
    router.push('/create-group');
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.static}`}>
        <Menu />
      </div>
      <div className={`${styles.section} ${styles.scrollable}`}>
        <div className="group-profile-page">

          <div className="group-header">
            {groupDetails.image && (
              <div className="group-image">
                <img src={groupDetails.image} alt="Group Cover" className="group-image-circle" />
              </div>
            )}

            <div className="group-details">
              <h3>{groupDetails.name}</h3>
              <p>Privacidad: {groupDetails.state}</p>
              <button onClick={handleBackToCreation}>
                Regresar
              </button>

              {/* Botón para seguir o dejar de seguir el grupo */}
              <button onClick={toggleFollowGroup} className="follow-button">
                {isFollowing ? 'Dejar de seguir' : 'Seguir'}
              </button>
            </div>
          </div>

          {/* Formulario para agregar una nueva publicación */}
          <div className="new-post-form">
            <h4>Agregar una nueva publicación</h4>
            <textarea
              placeholder="Escribe algo..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleNewPostImage}
            />
            {newPostImage && (
              <div className="image-preview">
                <img src={newPostImage} alt="Preview" />
              </div>
            )}
            <button onClick={handleAddPost}>
              Publicar
            </button>
          </div>

          {/* Sección de publicaciones */}
          <div className="group-posts">
            <h4>Publicaciones del grupo</h4>
            <div className="posts-list">
              {posts.length > 0 ? (
                posts.map(post => (
                  <div key={post.id} className="post">
                    <p>{post.content}</p>
                    {post.image && (
                      <div className="post-image">
                        <img src={post.image} alt="Post" />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No hay publicaciones aún.</p>
              )}
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

export default GroupProfile;
