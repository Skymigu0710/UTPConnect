import React , { useState }from 'react';
import styles from '../styles/profileoptions.module.css';
import { Button } from '@mui/material';

const Profileoptions = ({ components }) => {
    const [selectedComponentIndex, setSelectedComponentIndex] = useState(0); // Estado para controlar el componente seleccionado
    return(
    <>
        <div className={`${styles.space} ${styles.moreinformation}`}>
            <section className={styles.posts}>
            <Button onClick={() => setSelectedComponentIndex(0)} variant="contained"
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
            <Button    onClick={() => setSelectedComponentIndex(1)}  variant="contained"
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
        {components[selectedComponentIndex]} {/* Muestra el componente del array en la posición del estado */}
    </>
    );
};
export default Profileoptions;