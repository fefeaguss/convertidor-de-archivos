import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

/**
 * Simula autenticación frontend sin backend.
 * Guarda user en localStorage para persistencia.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("convertx_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("convertx_user", JSON.stringify(user));
    else localStorage.removeItem("convertx_user");
  }, [user]);

  const login = ({ email, name }) => {
    // validación mínima (frontend)
    setUser({ email, name: name || email.split("@")[0] });
  };

  const register = ({ email, name }) => {
    // aquí solo simulamos registro
    setUser({ email, name: name || email.split("@")[0] });
  };

  const logout = () => setUser(null);

  const updateProfile = (updates) => setUser((u) => ({ ...u, ...updates }));

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
