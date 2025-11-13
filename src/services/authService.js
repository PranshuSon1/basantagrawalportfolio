import api from "./api";

export const authService = {
  // Login and get JWT token
  login: async (username, password) => {
    try {
      const response = await api.post("/login", { username, password });
      if (response.data.accessToken) {
        if (typeof window !== 'undefined') {
          localStorage.setItem("token", response.data.accessToken);
        }
        return { success: true, token: response.data.accessToken };
      }
      return { success: false, message: "No token received" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  },

  // Logout - clear token
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem("token");
    }
    return false;
  },

  // Get stored token
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("token");
    }
    return null;
  },
};

