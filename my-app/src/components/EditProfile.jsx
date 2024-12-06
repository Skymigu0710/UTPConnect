import React, { useState } from 'react';
import style from '../styles/editProfile.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';  // Asegúrate de importar useRouter

const EditForm = ({ handleCancel }) => {

    const router = useRouter();  // Usamos el hook useRouter
    const { username} = router.query; // Reemplaza con el ID del usuario actual

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [draggin, setDraggin] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);


    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        profilePicture: null, // Puedes ajustar según el tipo de datos que necesites
        coverPicture: null,
    });

    const startDrag = (e) => {
        setDraggin(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const onDrag = (e) => {
        if (draggin) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const stopDrag = () => {
        setDraggin(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (type === 'profile') {
            setProfileImage(file);
            setFormData({
                ...formData,
                profilePicture: file,
            });
        } else if (type === 'cover') {
            setCoverImage(file);
            setFormData({
                ...formData,
                coverPicture: file,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar si las imágenes se han seleccionado y prepararlas para enviar al endpoint
        const token = localStorage.getItem('token');  // Obtener el token de autenticación de algún lugar (localStorage, context, etc.)


        // Enviar datos de usuario al backend
        const userUpdateData = {
            name: formData.name,
            lastName: formData.last_name,
        };

        try {
            const userUpdateResponse = await fetch(
                `http://localhost:8083/auth/${username}/updateUser`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(userUpdateData),
                }
            );

            if (!userUpdateResponse.ok) {
                throw new Error('Error al actualizar los datos del usuario');
            }


       // Subir la imagen de portada si está seleccionada
if (coverImage) {
    const coverFormData = new FormData();
    // Añadir el nombre de usuario (probablemente lo tienes en una variable `username`)
    coverFormData.append('username', 'ruth');   // Asegúrate de que `username` esté disponible
    // Añadir el archivo de la imagen al FormData
    coverFormData.append('fileUrl', coverImage);
    
    
    
    // Añadir el tipo de la imagen (en este caso "cover")
    coverFormData.append('imageType', 'cover');
    // Revisa los datos antes de enviar la solicitud
for (let [key, value] of coverFormData.entries()) {
    console.log(key, value);  // Esto imprimirá los datos que estás enviando
}

    try {
        // Subir la imagen de portada
        const coverImageUploadResponse = await fetch(
            'http://localhost:8086/media/upload',
            {
                method: 'POST',
                headers: {
                    Authorization: `${token}`,
                },
                body: coverFormData,
            }
        );
    
        // Verificar si la respuesta es exitosa
        if (!coverImageUploadResponse.ok) {
            const errorData = await coverImageUploadResponse.json();
            throw new Error(`Error al subir la imagen de portada: `, errorData);
        }
    
        // Suponiendo que el servidor devuelve la URL de la imagen
        const coverImageData = await coverImageUploadResponse.json();
        const { fileUrl } = coverImageData;
    
        console.log('Imagen subida correctamente:', fileUrl);
    
    } catch (error) {
        console.error('Hubo un error al subir la imagen:', error.message);
    }
    
}


            // Si todo fue exitoso, manejar la respuesta
            alert('Perfil actualizado exitosamente');
            handleCancel();  // Cerrar el formulario
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);

            alert('Hubo un error al actualizar el perfil');
        }
    };

    return (
        <>
            <div>
                <div className={style.overlay}></div>

                <div className={style.form}>
                    <form id="editform" className={style.editform} onSubmit={handleSubmit}>
                        <h2>Edit Profile</h2>
                        <label htmlFor="name">Nombre: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="lastname">Apellidos: </label>
                        <input
                            type="text"
                            id="lastname"
                            name="last_name"
                            placeholder="Ingresa tus apellidos"
                            required
                            value={formData.last_name}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="profilePicture">Perfil: </label>
                        <div className={style.contentPhoto}>
                            <div className={style.editphotoProfile}>
                                <Image
                                    id="profilePreview"
                                    src={
                                        profileImage
                                            ? URL.createObjectURL(profileImage)
                                            : 'https://2.bp.blogspot.com/_ntaO39RNHbQ/THvAi949LEI/AAAAAAAACxQ/Zh2qotIvOdI/s1600/wallpapers_de_paisajes_hd_47-1920x1080.jpg'
                                    }
                                    alt="Imagen de perfil"
                                    className={style.profile_image}
                                    width={100}
                                    height={100}
                                    style={{ top: `${position.y}px` }}
                                />
                            </div>
                        </div>
                          
                        <input
                            type="file"
                            id="profilePicture"
                            className={style.upLoadInput}
                            name="profilePicture"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'profile')}
                        />              
                        <label htmlFor="coverPicture">Portada: </label>
                        <div className={style.editphoto}>
                            <Image
                                id="coverPreview"
                                src={
                                    coverImage
                                        ? URL.createObjectURL(coverImage)
                                        : 'https://www.caracteristicass.de/wp-content/uploads/2023/02/imagenes-artisticas.jpg'
                                }
                                alt="Imagen de portada"
                                className={style.cover_image}
                                onMouseDown={startDrag}
                                onMouseMove={onDrag}
                                onMouseUp={stopDrag}
                                onMouseLeave={stopDrag}
                                width={100}
                                height={100}
                                style={{ top: `${position.y}px` }}
                            />
                        </div>

                        <input
                            type="file"
                            id="coverPicture"
                            className={style.upLoadInput}
                            name="coverPicture"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'cover')}
                        />

                        <div className="form-buttons">
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditForm;
