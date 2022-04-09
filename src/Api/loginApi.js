import { addAxios } from './api';

export const loginApi = {
  loginUser() {
    return addAxios.get(`auth/me`).then(response => {
      return response.data;
    });
  },

  login(email, password, rememberMe = false, captcha = null) {
    return addAxios
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then(response => {
        return response.data;
      });
  },
  logOut() {
    return addAxios.delete(`auth/login`).then(response => {
      return response.data;
    });
  },
};
