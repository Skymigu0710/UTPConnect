import React, { useState } from 'react';
import './crearPost.css';

const CreatePost = ({ onPostCreate }) => {
    const [postContent, setPostContent] = useState('');// Estado para manejar el contenido del nuevo post

    // Maneja el cambio en el campo de texto del post
    const handleChange = (event) => {
        setPostContent(event.target.value);
    };
    // Maneja el envío del formulario para crear un nuevo post
    const handleSubmit = (event) => {
        event.preventDefault();
        if (postContent.trim()) {// Verifica que el contenido no esté vacío
            onPostCreate(postContent);// Llama a la función para agregar el nuevo post
            setPostContent('');// Limpia el campo de texto después de enviar el post
        }
    };

    return (
        <div className="create-post">
            <h2>Postea algo</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={postContent}// Valor del campo de texto controlado por el estado
                    onChange={handleChange}// Maneja el cambio en el campo de texto
                    placeholder="Postea algo ..."// Texto de sugerencia en el campo de texto
                    rows="4"// Número de filas visibles del área de texto
                    required// Hace que el campo sea obligatorio
                ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePost;