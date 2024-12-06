import React, {useState} from 'react';
import { Button } from '@mui/material';
import styles from '../styles/studentsprofile.module.css';
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { FaEdit } from 'react-icons/fa'; 
import Image from 'next/image';

function Studentsprofile ({userData, handleclick })  {

    //estado para controlar si se está siguiendo o no
    const [isfollowing, setIsfollowing] = useState(false);

    //Funcion para alternar el estado de seguir/o dejar de seguir
    const handleFollowToggle = () => {
        setIsfollowing(!isfollowing);
    }
return (
    
    <>

        <div className={`${styles.space} ${styles.portada}`}>
            <img id={styles.imgcat} src={userData.coverPictureUrl} alt="Portada" />
            <Button variant="contained"
                style={{
                    position: 'absolute',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    right: '0px',
                    bottom: '10px',
                    marginRight: '10px',
                }}>
                  <FaEdit className={styles.icon} onClick={handleclick}/>
            </Button>
        </div>
        
        <div className={`${styles.space} ${styles.information}`}>
        <div className={`${styles.space} ${styles.photo}`}>
            <Image id={styles.imgprofile} src={userData.profilePictureUrl} alt="Perfil" 
                width= {130}
                height={130}
            />
            <div className={styles.namecontent}>
            {userData.name} + {userData.last_name}
                <br />
                {userData.username}
            </div>
        </div>
            <Button variant="contained"
                style={{
                    position: 'absolute',
                    backgroundColor: isfollowing ? 'grey' : 'rgb(93, 195, 226)',
                    color: 'white',
                    borderRadius: '15px',
                    right: '0px',
                    marginRight: '10px',
                    top: '10px',
                }}
                onClick={handleFollowToggle}//controlar el click
                >       
                {isfollowing ? 'Unfollow' : 'Follow'}
                {isfollowing ? <IoRemoveCircle className={styles.icon} /> : <IoAddCircle className={styles.icon} />}
            </Button>
        </div>
    </>
);
};
export default Studentsprofile;
