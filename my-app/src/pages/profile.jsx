"use client";  
import React, { useState } from 'react';
import styles from '../styles/index.module.css'; // Importa los estilos del módulo CSS
//importar módulos
import StudentsProfile from '../components/studentsprofile';
import ProfilePosts from '../components/profileposts';
import ProfileOptions from '../components/profileoptions';
// Define la variable gato para la imagen
const gato = '/images/th.jpeg';
/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function Profile() {
  // Estado para controlar la visibilidad de los comentarios en cada publicación
  const [commentsVisible, setCommentsVisible] = useState({ 1: false, 2: false });
  // Función para alternar la visibilidad de los comentarios
  const toggleComments = (postId) => {
    setCommentsVisible(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  // Estado para los comentarios de cada publicación
  const [comments, setComments] = useState({ 1: [], 2: [], 3: [], 4: [] });
  // Estado para el nuevo comentario que se está escribiendo
  const [newComment, setNewComment] = useState({ 1: '', 2: '', 3: '', 4: '' });
  // Función para manejar el envío de un comentario
  const handleSendComment = (postId) => {
    if (newComment[postId].trim() !== '') {
      setComments(prevComments => ({
        ...prevComments,
        [postId]: [...prevComments[postId], newComment[postId]] // Añade el nuevo comentario a la publicación específica
      }));
      setNewComment(prevState => ({
        ...prevState,
        [postId]: ''  // Limpia el campo de texto del comentario
      }));
      setCommentsVisible(prevState => ({
        ...prevState,
        [postId]: true // Muestra los comentarios al enviar uno nuevo
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.static} ${styles.left}`}>
        sadsd
      </div>
      <div className={`${styles.section} ${styles.scrollable}`}>
        <div className={styles.profile}>
          <StudentsProfile gato={gato} />
          <ProfileOptions />
          <div className={styles.feed}>
            {/* Mapeo para crear múltiples publicaciones */}
            {[1, 2, 3, 4].map((postId) => (
              <ProfilePosts
                key={postId}
                postId={postId}
                commentsVisible={commentsVisible}
                toggleComments={toggleComments}
                comments={comments}
                newComment={newComment}
                setNewComment={setNewComment}
                handleSendComment={handleSendComment}
                gato={gato}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.section} ${styles.static} ${styles.right}`}>
        AAA
      </div>
    </div>
  );
}
