import api from '../config/services';

export const getAppointments = async (page = 1, limit = 10) => {
  try {
    const response = await api.get('/appointments', { params: { page, limit } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentById = async (appointmentId) => {
  try {
    const response = await api.get(`/appointments/${appointmentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAppointment = async (appointmentId) => {
  try {
    await api.delete(`/appointments/${appointmentId}`);
  } catch (error) {
    throw error;
  }
};