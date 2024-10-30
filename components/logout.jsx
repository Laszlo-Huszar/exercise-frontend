'use client';

import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include',
    });
  };
  return <button onClick={handleLogout}>Logout button</button>;
}
