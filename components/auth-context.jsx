'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    console.log('logout');
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch('http://localhost:3000/user', {
          credentials: 'include',
        });
        if (!res.ok) {
          setUser(null);
          return;
        }

        setUser(await res.json());
      } catch (err) {
        setUser(null);
      }
    };

    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
