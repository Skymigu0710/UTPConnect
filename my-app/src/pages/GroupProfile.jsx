import React, { useState } from 'react';
import '../styles/GroupProfile.css';

function GroupProfile({ groupName, groupPrivacy, groupImage, onBackToCreation }) {
  const [posts, setPosts] = useState([]); 
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false); 
  const [showToast, setShowToast] = useState(false); // Estado para el mensaje flotante
  const [toastMessage, setToastMessage] = useState(''); // Mensaje del toast

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
      setPosts([...posts, newPost]); 
      setNewPostContent(''); 
      setNewPostImage(null); 
    } else {
      alert('Escribe algo para publicar.');
    }
  };

  const toggleFollowGroup = () => {
    setIsFollowing(!isFollowing); 
    showFollowToast(isFollowing ? `Dejaste de seguir ${groupName}` : `Estás siguiendo ${groupName}`);
  };

  const showFollowToast = (message) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false); // Oculta el toast después de 3 segundos
    }, 3000);
  };

  return (
    <div className="group-profile-page">
      <div className="group-header">
        {groupImage && (
          <div className="group-image">
            <img src={groupImage} alt="Group Cover" className="group-image-circle" />
          </div>
        )}

        <div className="group-details">
          <h3>{groupName}</h3>
          <p>Privacidad: {groupPrivacy === 'Public' ? 'Público' : 'Privado'}</p>
          <button onClick={onBackToCreation}>
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

      {/* Mensaje flotante (toast) */}
      {showToast && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default GroupProfile;
