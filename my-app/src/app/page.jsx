'use client'; // Esto indica que el componente es un Client Component

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goToProfile = () => {
    router.push('/profile');
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
}
