import React from 'react';
import '../styles/MuroPost.css';

function MuroPost({ posts = [] }) {
  return (
    <div className="wall">
      <h2>Nuevos Post</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img src={post.user.profilePicture} alt="" className="profile-picture" />
              <h3>{post.user.name}</h3>
            </div>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="" className="post-image" />}
          </div>
        ))
      ) : (
        <p>No hay publicaciones aún.</p>
      )}
    </div>
  );
}

export default MuroPost;