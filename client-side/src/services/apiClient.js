import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    let message = "Something went wrong";
    // Backend responded with an error
    if (error.response) {
      message =
        error.response.data?.message ||
        `Request failed with status ${error.response.status}`;

      // Handle specific status codes
      if (error.response.status === 401) {
        message = "Unauthorized. Please login again.";
      }

      if (error.response.status === 403) {
        message = "You don't have permission to perform this action.";
      }

      if (error.response.status === 404) {
        message = "Requested resource was not found.";
      }

      if (error.response.status >= 500) {
        message = "Server error. Please try again later.";
      }
    }

    // Request was sent but no response received
    else if (error.request) {
      message = "Unable to connect to the server.";
    }

    // Error while creating the request
    else {
      message = error.message;
    }

    // Create a clean error object
    const customError = new Error(message);

    customError.status = error.response?.status;
    customError.data = error.response?.data;

    return Promise.reject(customError);
  },
);

export default apiClient;
