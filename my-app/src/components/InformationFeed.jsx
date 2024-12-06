import "../styles/InformationFeed.css";
import { Button } from '@mui/material';

const MyComponent = ({ userData }) => {
  return (
    <div className="infocontent">
      <div className="informationcontent">
        <div className="informationtext">
          <div className="info_unit">
            <p>Nombre</p>
            <text>{userData.name}</text>
          </div>
          <div className="info_unit">
            <p>Cumpleaños</p>
            <text>{userData.birthdate}</text>
          </div>
          <div className="info_unit">
            <p>Carrera</p>
            <text>{userData.career}</text>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyComponent;
