import React, { useState } from 'react';
import '../styles/muroPost.css';

const Wall = ({ posts }) => {
    const [newComment, setNewComment] = useState(''); // Estado para manejar el nuevo comentario

    // Maneja el cambio en el campo de texto del comentario
    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    // Maneja el env�o del formulario de comentario
    const handleCommentSubmit = (postId, event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario (recarga de la p�gina)
        console.log(`Adding comment to post ${postId}: ${newComment}`); // Limpia el campo de comentario despu�s de enviarlo
        setNewComment('');
    };

    return (
        <div className="wall">
            <h2>Nuevos Post</h2>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <div className="post-header">
                        <img src={post.user.profilePicture} alt="" className="profile-picture" />
                        <div className="user-info">
                            <h3>{post.user.name}</h3>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post.content}</p>
                    </div>
                    <div className="comments">
                        <h3>Comentario</h3>
                        <form onSubmit={(e) => handleCommentSubmit(post.id, e)}>
                            <input
                                type="text"
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="Escribe un comentario..."
                                required
                            />
                            <button type="submit">Comentario</button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wall;
