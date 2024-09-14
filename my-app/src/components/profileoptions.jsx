import React from 'react';
import styles from '../styles/profileoptions.module.css';
import { Button } from '@mui/material';
const profileoptions = ({ }) => (
    <>
        <div className={`${styles.space} ${styles.moreinformation}`}>
            <section className={styles.posts}>
            <Button variant="contained"
                style={{                   
                    backgroundColor: 'black',
                    color: 'white',    
                    width:'100%',
                    height:'100%',
                    borderRadius: '0px ',
                }}>
             Posts
            </Button>
            </section>
            < section className={styles.contentinfo} >
            <Button variant="contained"
                style={{                   
                    backgroundColor: 'grey',
                    color: 'white',    
                    width:'100%',
                    height:'100%',
                    borderRadius: '0px ',
                }}>
            Informacion
            </Button>
            </section>
        </div>
    </>
);
export default profileoptions;