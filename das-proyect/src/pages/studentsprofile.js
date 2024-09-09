import React from 'react';
import { Button } from '@mui/material';
import styles from '../styles/StudentsProfile.module.css';

const studentsprofile = ({ gato }) => (
    <>
        <div className={`${styles.space} ${styles.portada}`}>
            <img id={styles.imgcat} src={gato} alt="Portada" />
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
        <div className={`${styles.space} ${styles.photo}`}>
            <img id={styles.imgprofile} src={gato} alt="Perfil" />
            <div className={styles.namecontent}>
                MARICIELO ALATA ROMAN
                <br />
                @U19300992
            </div>
        </div>
        <div className={`${styles.space} ${styles.information}`}>
            <Button variant="contained"
                style={{
                    position: 'relative',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '20px',
                    left: '85%',
                    top: '10px',
                }}>
                Seguir
            </Button>
        </div>
    </>
);
export default studentsprofile;