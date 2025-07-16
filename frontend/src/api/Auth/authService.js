import api from '../Api'

export const login = async (email, senha) => {
  return api.post('/auth/login', { email, senha });
};

export const logout = async () => {
  return api.post('/auth/logout');
};
