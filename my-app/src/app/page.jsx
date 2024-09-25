'use client'; // Esto indica que el componente es un Client Component

import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();

  const goToProfile = () => {
    router.push('/Profile');
  };
  const goToLogin = () => {
    router.push('/LoginRegister');
  };
  const goToCreateGroup = () => {
    router.push('/GroupCreation');
  };

  const goToProfileGroup = () => {
    router.push('/GroupProfile');
  };


  return (
    <div>
   
      {/* Otros enlaces o botones si es necesario */}
      <button onClick={goToProfile}>Ir al Perfil</button>
      <button onClick={goToCreateGroup}>Crear Grupo</button>
      <button onClick={goToProfileGroup}>Perfil del Grupo</button>
      <button onClick={goToLogin}>LOGIN</button>
    </div>
  );

}
