import { addAxios } from './api';

export const securityApi = {
  getCaptchaUrl() {
    return addAxios.get(`security/get-captcha-url`);
  },
};
