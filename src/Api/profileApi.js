import { addAxios } from './api';

export const profileApi = {
  getProfile(userId) {
    return addAxios.get(`https://social-network.samuraijs.com/api/1.0/Profile/${userId}`);
  },

  getStatus(userId) {
    return addAxios.get(`Profile/status/${userId}`);
  },

  updateStatus(status) {
    return addAxios.put(`Profile/status`, { status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return addAxios.put(`Profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  editProfile(profile) {
    return addAxios.put(`Profile`, profile);
  },
};
