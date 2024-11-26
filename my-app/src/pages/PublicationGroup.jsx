   import React, { useEffect, useState } from 'react';
import PublicationsService from '../services/PublicationsService';
import CommentsService from '../services/CommentsService';
import '../styles/publicationsGroup.css';

export default function PublicationsGroup() {
    const [description, setDescription] = useState('');
    const [publications, setPublications] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [idGrupo, setIdGrupo] = useState(0);
    const [nombreGrupo, setNombreGrupo] = useState('');
    const [comentarios, setComentarios] = useState({});
    const [comentarioDescripcion, setComentarioDescripcion] = useState(''); 
    const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);
    const [comentarioSeleccionado, setComentarioSeleccionado] = useState(null);
    const [mostrarComentarios, setMostrarComentarios] = useState({});

    useEffect(() => {
        const obtenerUsuarioLogeado = async () => {
            if (localStorage.getItem('userDetails') == null) {
                setUsuario({
                    id_users: 2,
                    name: "MIJAEL NEIRA CASTRO"
                });
            } else {
                setUsuario(JSON.parse(localStorage.getItem('userDetails')));
            }
        };

        const obtenerGrupo = async () => {
            setIdGrupo(3);
            setNombreGrupo('UNIVERSIDAD TECNOLOGICA DEL PERU');
        };

        obtenerUsuarioLogeado();
        obtenerGrupo();
        fetchPublications();
    }, [idGrupo]);

    const fetchPublications = async () => {
        try {
            const data = await PublicationsService.listarPorIdGrupo(idGrupo);
            setPublications(data);
        } catch (error) {
            console.error('Error al cargar publicaciones:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (description.trim()) {
            const newPublication = {
                idGrupo: idGrupo,
                idUsuario: usuario.id_users,
                nombreUsuario: usuario.name,
                descripcion: description
            };

            try {
                await PublicationsService.guardar(newPublication);
                await setDescription('');
                fetchPublications();
                
            } catch (error) {
                console.error('Error al guardar la publicación:', error);
            }
        }
    };

    const handlePublicationClick = async (publicationId) => {
        setPublicacionSeleccionada(publicationId);
        if (mostrarComentarios[publicationId]) {
            setMostrarComentarios((prev) => ({ ...prev, [publicationId]: false }));
            setComentarios((prev) => ({ ...prev, [publicationId]: [] }));
        } else {
            try {
                const comentariosData = await CommentsService.listarComentariosPorPublicacion(publicationId);
                setComentarios((prev) => ({ ...prev, [publicationId]: comentariosData }));
                setMostrarComentarios((prev) => ({ ...prev, [publicationId]: true }));
            } catch (error) {
                console.error('Error al cargar comentarios:', error);
            }
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (comentarioDescripcion.trim() && publicacionSeleccionada) {
            const newComment = {
                publicacionId: publicacionSeleccionada,
                usuarioId: usuario.id_users,
                nombreUsuario: usuario.name,
                descripcionComentario: comentarioDescripcion
            };

            try {
                await CommentsService.guardar(newComment);
                setComentarioDescripcion('');
                const comentariosData = await CommentsService.listarComentariosPorPublicacion(publicacionSeleccionada);
                setComentarios((prev) => ({ ...prev, [publicacionSeleccionada]: comentariosData }));
            } catch (error) {
                console.error('Error al guardar el comentario:', error);
            }
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await CommentsService.eliminar(commentId);
            setComentarios((prev) => ({
                ...prev,
                [publicacionSeleccionada]: prev[publicacionSeleccionada].filter((comentario) => comentario.id !== commentId)
            }));
        } catch (error) {
            console.error('Error al eliminar el comentario:', error);
        }
    };

    const handleEditComment = (comment) => {
        setComentarioSeleccionado(comment);
        setComentarioDescripcion(comment.descripcionComentario);
    };

    const handleUpdateComment = async (e) => {
        e.preventDefault();
        if (comentarioDescripcion.trim() && comentarioSeleccionado) {
            const updatedComment = {
                descripcionComentario: comentarioDescripcion
            };

            try {
                await CommentsService.actualizar(comentarioSeleccionado.id, updatedComment);
                const comentariosData = await CommentsService.listarComentariosPorPublicacion(publicacionSeleccionada);
                setComentarios((prev) => ({ ...prev, [publicacionSeleccionada]: comentariosData }));
                setComentarioDescripcion('');
                setComentarioSeleccionado(null);
            } catch (error) {
                console.error('Error al actualizar el comentario:', error);
            }
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = String(date.getFullYear()).slice(-4); 
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="publications-container">
            <div className="group-banner">
                <h2>{nombreGrupo}</h2>
            </div>

            <form onSubmit={handleSubmit} className="publication-form">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Escribe tu publicación aquí..."
                    rows="4"
                    className="publication-input"
                />
                <button type="submit" className="publication-button">Publicar</button>
            </form>

            <div className="publications-list">
                <h2>Publicaciones:</h2>
                {publications.length === 0 ? (
                    <p>No hay publicaciones.</p>
                ) : (
                    <ul>
                        {publications.map((pub) => (
                            <li key={pub.id} className="publication-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="Avatar" className="avatar" />
                                <strong>{pub.nombreUsuario} {formatDate(pub.fechaCreacion)}  <br />  <br /></strong> {pub.descripcion}
                                <br />  <br />
                                <button onClick={() => handlePublicationClick(pub.id)} className="toggle-comments-button">
                                    {mostrarComentarios[pub.id] ? 'Ocultar Comentarios' : 'Ver Comentarios'}
                                </button>

                                <br />
                                {mostrarComentarios[pub.id] && (
                                    <div className="comentarios-container">
                                        <ul className="comentarios-list">
                                            {comentarios[pub.id]?.map((comentario) => (
                                                <li key={comentario.id} className="comentario-item">
                                                    <strong>{comentario.nombreUsuario}:</strong> {comentario.descripcionComentario}
                                                    {usuario.id_users === comentario.usuarioId && (
                                                        <span className="comment-actions">
                                                            <button onClick={() => handleEditComment(comentario)} className="edit-button">Editar</button>
                                                            <button onClick={() => handleDeleteComment(comentario.id)} className="delete-button">Eliminar</button>
                                                        </span>
                                                    )}
                                                </li>
                                            )) || <li>No hay comentarios.</li>}
                                        </ul>

                                        <form onSubmit={comentarioSeleccionado ? handleUpdateComment : handleCommentSubmit} className="comment-form">
                                            <textarea
                                                value={comentarioDescripcion}
                                                onChange={(e) => setComentarioDescripcion(e.target.value)}
                                                placeholder="Escribe tu comentario aquí..."
                                                rows="2"
                                                className="comment-input"
                                            />
                                            <button type="submit" className="comment-button">{comentarioSeleccionado ? 'Actualizar' : 'Comentar'}</button>
                                        </form>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
