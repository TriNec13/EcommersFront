import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    // otras acciones de cierre de sesión si es necesario
  };

  useEffect(() => {
    // Actualizar el localStorage cuando isLoggedIn cambie
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    // Obtener el valor de isLoggedIn del localStorage al cargar la página
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(JSON.parse(storedLoggedIn));
  }, []);

  const authContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
