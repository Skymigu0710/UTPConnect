'use client'; // Esto indica que el componente es un Client Component

import { useRouter } from 'next/navigation';
import Login from '../pages/LoginRegister';


export default function Home() {
  const router = useRouter();

  const goToProfile = () => {
    router.push('/profile');
  };
  const goToMainpage = () => {
    router.push('/mainfeed');
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
    <Login onLogin={goToMainpage} />
  );

}
