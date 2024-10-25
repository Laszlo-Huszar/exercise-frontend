'use client';

import { useEffect } from 'react';

export default function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/login/federated/google';
  };

  useEffect(() => {
    const checkUser = async () => {
      const res = await fetch('http://localhost:3000/user', {
        credentials: 'include',
      });

      console.log(res.ok);

      const user = await res.json();
      console.log(user);
    };

    checkUser();
  }, []);

  return (
    <main>
      <button onClick={handleLogin}>login</button>
    </main>
  );
}
