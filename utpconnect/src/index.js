import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Menu from "./menu.js"
import Grupos from "./grupos.js"
import VentanaPost from "./crearPost.js"
import MuroPost from "./muroPost.js"

    const App = () => {
        const [posts, setPosts] = useState([
            {
                id: 1,
                content: 'Hola a todos',
                user: {
                    name: 'Julio Avila',
                    profilePicture: '',
                },
            },
            {
                id: 2,
                content: 'Otro post',
                user: {
                    name: 'Angela Zavala',
                    profilePicture: '',
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
                    profilePicture: '',
                },
            };
            setPosts([newPost, ...posts]);// Añade el nuevo post al principio de la lista de posts
        };

        return (
            <div className="container">
                <div className="section static">
                    <Menu />
                </div>
                <div className="section scrollable">
                    <VentanaPost onPostCreate={handlePostCreate} />
                    <MuroPost posts={posts} />
                </div>
                <div className="section static">
                    <Grupos />
                </div>
            </div>
        )
    }

    export default App;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );