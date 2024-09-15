import React, { useState } from 'react';
import '../styles/crearPost.css';

const CreatePost = ({ onPostCreate }) => {
    const [postContent, setPostContent] = useState('');// Estado para manejar el contenido del nuevo post

    // Maneja el cambio en el campo de texto del post
    const handleChange = (event) => {
        setPostContent(event.target.value);
    };
    // Maneja el env�o del formulario para crear un nuevo post
    const handleSubmit = (event) => {
        event.preventDefault();
        if (postContent.trim()) {// Verifica que el contenido no est� vac�o
            onPostCreate(postContent);// Llama a la funci�n para agregar el nuevo post
            setPostContent('');// Limpia el campo de texto despu�s de enviar el post
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
                    rows="4"// N�mero de filas visibles del �rea de texto
                    required// Hace que el campo sea obligatorio
                ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePost;