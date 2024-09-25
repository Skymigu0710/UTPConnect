import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import styles from '../styles/profileposts.module.css';
import { TextField, IconButton, Button } from '@mui/material';

const profileposts = ({ postId, commentsVisible, toggleComments, comments, newComment, setNewComment, handleSendComment, gato }) => (
    <>
     <section key={postId} className={styles.publication}>
        <div className={styles.postInfo}>
        <img id={styles.profilepublic} src={gato} alt="Publicación" />
        <div className={styles.namepublic}>
            Maricielo Alata Roman
        </div>
        </div>
        <div id={styles.publicfeed}>
            <div className={styles.showcomments}>
                    <ChatIcon id={styles.iconcomment}
                    cursor='pointer'
                    onClick={() => toggleComments(postId)} />

            </div>
            <img id={styles.imgfeed} src={gato} alt="Feed" />
            {commentsVisible[postId] && (
                <div className={`${styles.comments} ${commentsVisible[postId] ? styles.show : styles.hide}`}>
                    {comments[postId].map((comment, index) => (
                        <div key={index}>
                            <label>{comment}</label>
                            <hr className={styles.separatorcoment} />
                        </div>
                    ))}
                </div>
            )}
            <div className={styles.contentcomment}>
                <input
                    id={`text-${postId}`}                  
                    placeholder="Escribe algo..."
                    value={newComment[postId] || ''} // Asigna el valor del campo de texto correspondiente al postId
                    onChange={(e) => setNewComment({
                        ...newComment,
                        [postId]: e.target.value // Actualiza solo el comentario del postId actual
                    })}
                    InputLabelProps={{ shrink: false}} // Evita que el label se mueva
                />
                <div className={styles.icon}>
                    <IconButton color="primary" onClick={() => handleSendComment(postId)}>
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    </section>
    </>  
);
export default profileposts;