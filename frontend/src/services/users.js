import api from '../config/services';

export const getUsuarios = async (page = 1, limit = 10) => {
  try {
    const response = await api.get('/usuario', { params: { page, limit } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsuarioById = async (usuarioId) => {
  try {
    const response = await api.get(`/usuario/${usuarioId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUsuario = async (usuarioData) => {
  try {
    const response = await api.post('/usuario', usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUsuario = async (usuarioId, usuarioData) => {
  try {
    const response = await api.put(`/usuario/${usuarioId}`, usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUsuario = async (usuarioId) => {
  try {
    await api.delete(`/usuario/${usuarioId}`);
  } catch (error) {
    throw error;
  }
};