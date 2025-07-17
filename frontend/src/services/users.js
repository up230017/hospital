import api from '../config/services';

export const getUsuarios = async (page = 1, limit = 10) => {
  try {
    const response = await api.get('/usuarios', { params: { page, limit } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsuarioById = async (usuarioId) => {
  try {
    const response = await api.get(`/usuarios/${usuarioId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUsuario = async (usuarioData) => {
  try {
    const response = await api.post('/usuarios', usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUsuario = async (usuarioId, usuarioData) => {
  try {
    const response = await api.put(`/usuarios/${usuarioId}`, usuarioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUsuario = async (usuarioId) => {
  try {
    await api.delete(`/usuarios/${usuarioId}`);
  } catch (error) {
    throw error;
  }
};