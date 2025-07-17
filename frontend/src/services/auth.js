import api from '../config/services';

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userName, email, password) => {
  try {
    const response = await api.post('/auth/register', { userName, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const refreshToken = async (token) => {
  try {
    const response = await api.post('/auth/refresh-token', { token });
    return response.data;
  } catch (error) {
    throw error;
  }
};