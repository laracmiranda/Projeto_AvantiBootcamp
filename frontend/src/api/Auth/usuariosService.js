import api from './api';

export const listarUsuarios = async () => {
  return api.get('/usuarios');
};
