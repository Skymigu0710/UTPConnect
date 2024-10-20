import { useState } from 'react';
import Link from 'next/link';
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; // Importar el icono de MUI

const DropdownNav = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar la visibilidad del dropdown

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible); // Cambiar entre mostrar y ocultar el dropdown
    };

    return (
        <div className="navs">
            <DensityMediumIcon 
                cursor='pointer' 
                onClick={toggleDropdown} // Llamar a la función cuando se hace clic
            />
            {isDropdownVisible && ( // Mostrar el contenido del dropdown solo si isDropdownVisible es true
                <div className="navcontent">
                    <li>
                        <Link href={'./LoginRegister'}>Cerrar sesión</Link>
                    </li>
                </div>
            )}
        </div>
    );
};

export default DropdownNav;
