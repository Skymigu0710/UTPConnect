import React from 'react';
import { Button } from '@mui/material';
import styles from '../styles/studentsprofile.module.css';

import Image from 'next/image';

const studentsprofile = ({ gato, userData }) => (
    <>
        <div className={`${styles.space} ${styles.portada}`}>
            <img id={styles.imgcat} src={gato} alt="Portada" />
            <Button variant="contained"
                style={{
                    position: 'absolute',
                    backgroundColor: 'grey',
                    color: 'white',
                    borderRadius: '20px ',
                    right: '0px',
                    bottom: '10px',
                    marginRight: '10px',
                }}>
                EDITAR
            </Button>

        </div>
        
        <div className={`${styles.space} ${styles.information}`}>
        <div className={`${styles.space} ${styles.photo}`}>
            <Image id={styles.imgprofile} src={gato} alt="Perfil" 
                width= {130}
                height={130}
            />
            <div className={styles.namecontent}>
<<<<<<< HEAD
            {userData.name} {userData.last_name}
=======
            {userData.name}
>>>>>>> 65462477d4e678f82de7a4cb9e0136d1d06aa6f6
                <br />
                {userData.username}
            </div>
        </div>
            <Button variant="contained"
                style={{
                    position: 'absolute',
                    backgroundColor: 'rgb(93, 195, 226)',
                    color: 'white',
                    borderRadius: '20px',
                    right: '0px',
                    marginRight: '10px',
                    top: '10px',
                }}>
                Seguir
            </Button>
        </div>
    </>
);
export default studentsprofile;
