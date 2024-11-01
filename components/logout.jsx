'use client';

import { useAuth } from './auth-context';

export default function Logout() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    const res = await fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include',
    });
    logout();
  };
  return <button onClick={handleLogout}>Logout button</button>;
}
