import "../styles/InformationFeed.css";
import {Button } from '@mui/material';

const MyComponent = () => {



  return (
    <div >

      <div className="informationcontent">
        <div className="informationtext">
          <p>Nombre</p>
          <text>Maricielo Alata Roman</text>
          <p>Cumpleaños</p>
          <text>07/10/2002</text>
          <p>Carrera</p>
          <text>Ingeniería de sistemas y software</text>
        </div>
        <div className="editinfo">
        <Button>Editar</Button>
        </div>

      </div>

    </div>
  );
};

export default MyComponent;
