import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import styles from '../styles/profileposts.module.css';
import { TextField, IconButton } from '@mui/material';
import Image from 'next/image';

const Profileposts = ({ postId, commentsVisible, toggleComments, comments, newComment, setNewComment, handleSendComment, gato }) => (
    <>
        <section key={postId} className={styles.publication}>
            <div className={styles.postInfo}>
                <Image id={styles.profilepublic} src={gato} alt="Publicación" 
                width= {50}
                height={50}
                />
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
                    <TextField
                        InputLabelProps={{ shrink: false }} // Propiedad válida para TextField
                        id={`text-${postId}`}
                        placeholder="Escribe algo..."
                        value={newComment[postId] || ''} // Asigna el valor del campo de texto correspondiente al postId
                        onChange={(e) => setNewComment({
                            ...newComment,
                            [postId]: e.target.value // Actualiza solo el comentario del postId actual
                        })}
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
<<<<<<< HEAD:my-app/src/components/profileposts.jsx
export default Profileposts;
=======
export default profileposts;
>>>>>>> 0ba93719f87e681585d4208f71a540b73188518f:my-app/src/components/Profileposts.jsx
