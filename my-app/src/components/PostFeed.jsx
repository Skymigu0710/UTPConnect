import React, { useState } from 'react';
import styl from '../styles/profile.module.css'; // Importa los estilos del módulo CSS
import style from '../styles/profileposts.module.css'; 
import { FaImage } from 'react-icons/fa';
import { Button } from '@mui/material';
import Profileposts from '../components/Profileposts';

// Define la variable gato para la imagen
const gato = '/images/th.jpeg';
export default function Profile({ userData }) {

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
    <>
        <div className={styl.createpost} > 
            <div className={style.namepublic}>
                {userData.name}
            </div>
            <div>
            </div>
            <input type="text" className={styl.postsome} placeholder='Postea algo...' />
            <div className={styl.addcontent}>
                <FaImage className={styl.icon} /> {/* Ícono de imagen */}
                <Button className={styl.button}>Post</Button>
            </div>
        </div>
        {[1, 2, 3, 4].map((postId) => (
              <Profileposts
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
    </>
  );
}
