import React from 'react';
import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom/client';
import "./index.css";
import gato from "./images/th.jpeg";

function App() {
  //mostrar o no mostrar contenedor de comentarios
  const [commentsVisible, setCommentsVisible] = useState({ 1: false, 2: false });
  // Manejador para alternar la visibilidad de los comentarios
  const toggleComments = (postId) => {
    setCommentsVisible(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  //CARGAR COMENTARIOS DENTRO DE CONTENEDOR DE COMENTARIOS
  //Agregamos estado para los comentarios
  const [comments, setComments] = useState({ 1: [], 2: [], 3: [], 4: [] }); // Guarda los comentarios por postId
  const [newComment, setNewComment] = useState({ 1: '', 2: '', 3: '', 4: '' }); // Guarda el comentario actual que se está escribiendo
  //Funcion para manejar el envío de comentarios
  const handleSendComment = (postId) => {
    if (newComment[postId].trim() !== '') {
      setComments(prevComments => ({
        ...prevComments,
        [postId]: [...prevComments[postId], newComment[postId]] // Añade el nuevo comentario al postId específico
      }));
      setNewComment(prevState => ({
        ...prevState,
        [postId]: ''  // Limpia solo el campo de texto del postId actual
      }));
      // Mostrar el contenedor de comentarios al enviar un comentario
      setCommentsVisible(prevState => ({
        ...prevState,
        [postId]: true // Asegura que los comentarios se muestren sin alternarlos
      }));

    }
  };

  return (
    <div className="container">
      <div className="section static left">
        sadsd
      </div>
      <div className="section scrollable">
        <div className="profile">
          <div className="space portada">
            <img id="imgcat" src={gato} />
            <Button variant="contained"
              style={{
                position: 'absolute',
                backgroundColor: 'grey',
                color: 'white',
                borderRadius: '20px ',
                left: '85%',
                bottom: '10px',
              }}>
              EDITAR
            </Button>
          </div>
          <div className="space photo">
            <img id="imgprofile" src={gato} />
            <div className="namecontent">
              MARICIELO ALATA ROMAN
              @U19300992
            </div>
          </div>
          <div className="space information">
            <Button variant="contained"
              style={{
                position: 'relative',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px ',
                left: '85%',
                top: '10px',
              }}>
              Seguir
            </Button>
          </div>
          <div className="space moreinformation">
            <section className="posts">
              Posts
            </section>
            <section className="contentinfo">
              Información
            </section>
          </div>
          <div className="feed">
            {/* Mapeo para crear múltiples publicaciones */}
            {[1, 2, 3, 4].map((postId) => (
              <section key={postId} className="publication">
                <img id="profilepublic" src={gato} />
                <div className="namepublic">
                  Maricielo Alata Roman
                </div>
                <div id="publicfeed">
                  <div className="showcomments">
                    <IconButton
                      id="iconcomment"
                      color="black"
                      onClick={() => toggleComments(postId)}
                    >
                      <ChatIcon />
                    </IconButton>
                  </div>
                  <img id="imgfeed" src={gato} alt="Feed" />
                  {commentsVisible[postId] && (
                    <div className={`comments ${commentsVisible[postId] ? 'show' : 'hide'}`}>
                      {comments[postId].map((comment, index) => (
                        <div key={index}>
                          <label>{comment}</label>
                          <hr className="separatorcoment" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="contentcomment" >
                    <TextField
                      id={`text-${postId}`}
                      variant="outlined"
                      placeholder="Escribe algo..."
                      size="small"
                      fullWidth
                      value={newComment[postId] || ''} // Asigna el valor del campo de texto correspondiente al postId
                      onChange={(e) => setNewComment({
                        ...newComment,
                        [postId]: e.target.value // Actualiza solo el comentario del postId actual
                      })}
                      InputLabelProps={{ shrink: false }} // Evita que el label se mueva
                    />
                    <div className="icon">
                      <IconButton color="primary" onClick={() => handleSendComment(postId)}
                      >
                        <SendIcon />
                      </IconButton>
                    </div>
                  </div>
                  <hr className="separator" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className="section static right">
        AAA
      </div>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


