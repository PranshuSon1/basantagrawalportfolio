"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      
      if (savedUser && token) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const result = await authService.login(username, password);
      if (result.success) {
        const userData = { username };
        setUser(userData);
        if (typeof window !== 'undefined') {
          localStorage.setItem("user", JSON.stringify(userData));
        }
        return { success: true };
      }
      return { success: false, message: result.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Login failed",
      };
    }
  };

  const logout = () => {
    setUser(null);
    authService.logout();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);