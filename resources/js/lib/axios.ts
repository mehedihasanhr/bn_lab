import axios from 'axios';

// Define a function to fetch the CSRF token
async function getCsrfToken() {
  const response = await fetch('/csrf-token');
  const data = await response.json();
  return data.csrf_token;
}

// Create an axios instance
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to set the CSRF token dynamically before each request
axiosInstance.interceptors.request.use(
  async (config) => {
    // Fetch the CSRF token
    const csrfToken = await getCsrfToken();

    // Set the CSRF token in the headers if available
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken;
    }

    return config;
  },
  (error) => {
    // Handle any errors with the request
    return Promise.reject(error);
  },
);

export default axiosInstance;
