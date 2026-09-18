import axios from 'axios';

// 1. Point Axios directly to your Django server
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 2. Request Interceptor: Automatically attach the token to every outgoing request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// if access token dosent exist 
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                
                // temp token (access token)failed hence reask for it via longterm token(refreshtoken)
                const res = await axios.post('http://127.0.0.1:8000/api/auth/refresh/', {
                    refresh: refreshToken
                });

                // saves token and retrys the call
                localStorage.setItem('access_token', res.data.access);
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
                return api(originalRequest);
                
            } catch (refreshError) {
                //sends user to login screen if login has been revoked 
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;