import React, { useState } from 'react';
import style from '../styles/editProfile.module.css';


const editForm = ( {handleCancel} ) => {

    

    //mantiene la posicion inicial en el contenedor
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //si el usuario está arrastrando la img o no
    const [draggin, setDraggin] = useState(false);
    //ajusta la img
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const startDrag = (e) => {
        setDraggin(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const onDrag = (e) => {
        if (draggin) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
        }
    };

    const stopDrag = () => {
        setDraggin(false);
    };

   

    return (
        <>
          
                <div>
                    <div className={style.overlay} >

                    </div>

                    <div className={style.form} >
                        <form id="editform" className={style.editform} >
                            <h2>Edit Profile</h2>
                            <label for="name" >Nombre:  </label>
                            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />

                            <label for="name" >Apellidos:  </label>
                            <input type="text" id="lastname" name="lastname" placeholder="Ingresa tus apellidos" required />
                            <label for="name" >Perfil:   </label>
                           <div className={style.contentPhoto}>
                           <div className={style.editphotoProfile} >
                                <img
                                    id="profilePreview"
                                    src="https://tse2.mm.bing.net/th?id=OIP.diWlmJ_Zi9MqIfeweIf1AgHaJN&pid=Api&P=0&h=180"
                                    alt="Imagen de portada"
                                    class={style.profile_image}
                                    
                                    style={{ top: `${position.y}px` }}
                                />

                            </div>
                           </div>
                            <label for="name" >Portada:   </label>
                            <div className={style.editphoto} >
                                <img
                                    id="profilePreview"
                                    src="https://www.caracteristicass.de/wp-content/uploads/2023/02/imagenes-artisticas.jpg"
                                    alt="Imagen de portada"
                                    class={style.cover_image}
                                    onMouseDown={startDrag}
                                    onMouseMove={onDrag}
                                    onMouseUp={stopDrag}
                                    onMouseLeave={stopDrag}
                                    style={{ top: `${position.y}px` }}
                                />

                            </div>
                            <input type="file" id="profilePicture" className= {style.upLoadInput} name="profilePicture" accept="image/*" />
                            <div class="form-buttons">
                                <button type="submit">Guardar</button>
                                <button type="button" onClick={handleCancel}>Cancelar</button>
                            </div>
                        </form>
                    </div>

                </div>

            
        </>
    );
}
export default editForm;