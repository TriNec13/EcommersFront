import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }else {
      setIsLoggedIn(false);
    }
  }, []);

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
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
