import apiClient from "./apiClient";

const userService = {
  login: async (userData) => {
    try {
      const response = await apiClient.post("/users/login", userData);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  register: async (userData) => {
    try {
      const response = await apiClient.post("/users/register", userData);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default userService;
