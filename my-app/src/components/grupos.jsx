import React from 'react';
import "../styles/grupos.css";
import { Button } from '@mui/material';
import Image from 'next/image';

const grupos = ({ gato }) => (
    <>
        <div className="group">

            <h1>Groups</h1>
            <ul className="group-list">
                <li className="group-item">
                    <Image src={gato} alt="Feed" width={3} height={3}/><div>
                        <h2>Grupo 1</h2>
                    </div>
                    <Button>Seguir</Button>
                </li>
                <li className="group-item">
                    <Image src={gato} alt="Feed" width={3} height={3}/><div><h2>Grupo 2</h2></div>   <Button>Seguir</Button>
                </li>
                <li className="group-item">
                    <Image src={gato} alt="Feed" width={3}height={3} /><div><h2>Grupo 3</h2></div>   <Button>Seguir</Button>
                </li>
            </ul>
        </div>
    </>
);
export default grupos;
