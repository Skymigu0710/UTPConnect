class CommentsService {
    urlBase = 'http://localhost:8092/api/comnents';

    async guardar(data) {
        try {
            const response = await fetch(`${this.urlBase}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error al guardar comentario:', error);
            throw error;
        }
    }

    async listarComentariosPorPublicacion(publicacionId) {
        console.log(`${this.urlBase}/listarComentarios/${publicacionId}`);
        try {
            const response = await fetch(`${this.urlBase}/listarComentarios/${publicacionId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error al listar los comentarios por ID de publicacion:', error);
            throw error;
        }
    }

    async actualizar(comentarioId, data) {
        try {
         
            const response = await fetch(`${this.urlBase}/actualizar/${comentarioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error al actualizar comentario:', error);
            throw error;
        }
    }

    async eliminar(comentarioId) {
        try {
            const response = await fetch(`${this.urlBase}/eliminar/${comentarioId}`, {
                method: 'DELETE'
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return; 
        } catch (error) {
            console.error('Error al eliminar comentario:', error);
            throw error;
        }
    }
}

const commentsServiceInstance = new CommentsService();

export default commentsServiceInstance;
