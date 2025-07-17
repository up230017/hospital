import api from '../config/services';

export const getCitas = async (page = 1, limit = 10) => {
  try {
    const response = await api.get('/cita', { params: { page, limit } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCitaById = async (citaId) => {
  try {
    const response = await api.get(`/cita/${citaId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCita = async (citaData) => {
  try {
    const response = await api.post('/cita', citaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCita = async (citaId) => {
  try {
    await api.delete(`/cita/${citaId}`);
  } catch (error) {
    throw error;
  }
};