'use client';

import { useAuth } from './auth-context';

export default function User() {
  const { user } = useAuth();

  return (
    <>
      {!user && <p>no user</p>}
      {user && <p>{user.email}</p>}
    </>
  );
}
