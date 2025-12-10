import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (name = "Usuario Ejemplo") => {
    setUser({ name });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}
