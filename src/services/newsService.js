import api from "./api";

export const newsService = {
  // Get all news
  getAllNews: async () => {
    try {
      const response = await api.get("/news");
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  // Get single news by ID
  getNewsById: async (id) => {
    try {
      const response = await api.get(`/news/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  // Create new news (requires authentication)
  createNews: async (formData) => {
    try {
      const response = await api.post("/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  // Update news (requires authentication)
  updateNews: async (id, formData) => {
    try {
      const response = await api.put(`/news/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },

  // Delete news (requires authentication)
  deleteNews: async (id) => {
    try {
      const response = await api.delete(`/news/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  },
};

