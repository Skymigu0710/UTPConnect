class PublicationsService {
    urlBase = 'http://localhost:8091/api/publications';

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
            console.error('Error al guardar la publicación:', error);
            throw error; 
        }
    }

    async listarPorIdGrupo(grupoId) {
        try {
            const response = await fetch(`${this.urlBase}/listarPorgrupo/${grupoId}`, {
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
            console.error('Error al listar las publicaciones por ID de grupo:', error);
            throw error; 
        }
    }
}

const publicationsServiceInstance = new PublicationsService();

export default publicationsServiceInstance;