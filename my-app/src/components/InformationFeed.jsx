import "../styles/InformationFeed.css";
import { Button } from '@mui/material';

const MyComponent = () => {



  return (
    <div className="infocontent">
      <div className="informationcontent">
        <div className="informationtext">
          <div className="info_unit">
            <p>Nombre</p>
            <text>Maricielo Alata Roman</text>
          </div>
          <div className="info_unit">
            <p>Cumpleaños</p>
            <text>07/10/2002</text>
          </div>
          <div className="info_unit">
            <p>Carrera</p>
            <text>Ingeniería de sistemas y software</text>
          </div>
        </div>
      </div>
      <div className="editinfo">
        <Button>Editar</Button>
      </div>

    </div>
  );
};

export default MyComponent;
