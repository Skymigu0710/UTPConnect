import React, { useState } from 'react';
import './styles/GroupProfile.module.css';

function GroupProfile({ groupName, groupPrivacy, groupImage, onBackToCreation }) {
  const [posts, setPosts] = useState([]); // Estado para las publicaciones
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);

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

  const handleAddPost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        content: newPostContent,
        image: newPostImage,
      };
      setPosts([...posts, newPost]); // Agregar la nueva publicación al estado
      setNewPostContent(''); // Limpiar el contenido del textarea
      setNewPostImage(null); // Limpiar la imagen
    } else {
      alert('Escribe algo para publicar.');
    }
  };

  return (
    <div className="group-profile-page">
      <div className="group-header">
        {/* Imagen del grupo */}
        {groupImage && (
          <div className="group-image">
            <img src={groupImage} alt="Group Cover" className="group-image-circle" />
          </div>
        )}
        
        {/* Datos del grupo */}
        <div className="group-details">
          <h3>{groupName}</h3>
          <p>Privacidad: {groupPrivacy === 'Public' ? 'Público' : 'Privado'}</p>
          <button onClick={onBackToCreation}>
            Regresar a la creación
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
  );
}

export default GroupProfile;
