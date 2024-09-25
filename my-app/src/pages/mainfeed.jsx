import React, { useState } from 'react';
import styles from "../styles/profile.module.css";
import Menu from "../components/Menu";
import Groups from "../components/Grupos";
import PostFeed from '../components/PostFeed';
// Define la variable gato para la imagen
const gato = '/images/th.jpeg';

export default function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            content: 'Hola a todos',
            user: {
                name: 'Julio Avila',
                profilePicture: gato,
            },
        },
        {
            id: 2,
            content: 'Otro post',
            user: {
                name: 'Angela Zavala',
                profilePicture: gato,
            },
        },
    ]);
    //Crea un nuevo usuario
    const handlePostCreate = (newPostContent) => {
        const newPost = {
            id: posts.length + 1,
            content: newPostContent,
            user: {
                name: 'Joel Palomino',
                profilePicture: gato,
            },
        };
        setPosts([newPost, ...posts]);// A�ade el nuevo post al principio de la lista de posts
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.section} ${styles.static}`}>
        <Menu/>
      </div>
            < div className={`${styles.section} ${styles.scrollable}`}>
                <div className={styles.profile}>
                    <div className="searchbarre">
                        <input type="search" className="search-input" placeholder="Buscar grupos..." />
                    </div>
                    <div className={styles.feed}>
                        <PostFeed />
                    </div>
                </div>
                <Groups gato={gato} />
            </div>
        </div>
    );
}

