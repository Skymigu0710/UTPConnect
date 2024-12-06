import React from 'react';
import "../styles/grupos.css";
import { Button } from '@mui/material';
import Image from 'next/image';
import DropdownNav from '../components/DropdownNav';

const imgsize = { width: 70, height: 70 };


const grupos = ({ gato }) => (
    <>
        <DropdownNav />
        <div className="group">
            <h1>Groups</h1>
            <ul className="group-list">
                <li className="group-item">
                    <Image src={gato} alt="Feed" width={imgsize.width} height={imgsize.height} />
                    <div> 
                        <h5>Grupo 1</h5>
                    </div>
                    <Button>Seguir</Button>
                </li>
                <li className="group-item">
                    <Image src={gato} alt="Feed" width={imgsize.width} height={imgsize.height} />
                    <div>
                        <h5>Grupo 2</h5>
                    </div>   <Button>Seguir</Button>
                </li>
                <li className="group-item">
                    <Image src={gato} alt="Feed" width={imgsize.width} height={imgsize.height} />
                    <div>
                        <h5>Grupo 3</h5>
                    </div>
                    <Button>Seguir</Button>
                </li>
            </ul>
        </div>
    </>
);
export default grupos;
