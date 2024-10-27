'use client';

import { useEffect, useState } from 'react';

export default function User() {
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const res = await fetch('http://localhost:3000/user', {
        credentials: 'include',
      });

      if (!res.ok) {
        setErr({ message: 'response error' });
        return;
      }

      setUser(await res.json());
    };

    checkUser();
  }, []);

  return (
    <>
      {!user && <p>no user</p>}
      {user && <p>{user.email}</p>}
    </>
  );
}
