import instance from 'services/axios';

export const signUp = async (email, password) => {
  const requestbody = { email: email, password: password };
  const response = await instance.post('auth/signup', requestbody);
  localStorage.setItem('token', response.data.access_token);
  return response.data;
};

export const signIn = async (email, password) => {
  const requestbody = { email: email, password: password };
  const response = await instance.post('auth/signin', requestbody);
  localStorage.setItem('token', response.data.access_token);
  return response.data;
};
