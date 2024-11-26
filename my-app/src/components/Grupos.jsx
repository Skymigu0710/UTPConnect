import React from 'react';
import "../styles/grupos.css";


const grupos = ({gato }) => (
<div className="group">
            <h1>Groups</h1>
            <ul className="group-list">
                <li className="group-item">
                <img  src={gato} alt="Feed" /><div><h2>Grupo 1</h2></div>
                </li>
                <li className="group-item">
                <img src={gato} alt="Feed" /><div><h2>Grupo 2</h2></div>
                </li>
                <li className="group-item">
                <img src={gato} alt="Feed" /><div><h2>Grupo 3</h2></div>
                </li>
            </ul>
        </div>
);
export default grupos;
