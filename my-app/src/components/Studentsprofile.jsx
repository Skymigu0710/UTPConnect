import React from 'react';
import { Button } from '@mui/material';
import styles from '../styles/studentsprofile.module.css';

import Image from 'next/image';

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
                MARICIELO ALATA ROMAN
                <br />
                @U19300992
            </div>
        </div>
            <Button variant="contained"
                style={{
                    position: 'absolute',
                    backgroundColor: 'black',
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
