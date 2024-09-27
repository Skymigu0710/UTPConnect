import React from 'react';
import styles from "../styles/profile.module.css";
import Menu from "../components/Menu";
import Grupos from "../components/Grupos";
import PostFeed from '../components/PostFeed';
// Define la variable gato para la imagen
const gato = '/images/th.jpeg';

export default function App() {
    /*const [posts, setPosts] = useState([
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
    ]);*/

    return (
        <div className={styles.container}>
            <div className={`${styles.section} ${styles.static}`}>
                <Menu />
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
            </div>
            <div className={styles.groupsconteiner}>
        <Grupos gato={gato} />
        </div>
        </div>
    );
}

