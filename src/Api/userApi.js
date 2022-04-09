import { addAxios } from './api';

export const userApi = {
  getUserPage(currentPage, pageSize) {
    return addAxios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    });
  },

  deleteUser(userId) {
    return addAxios.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  },

  postUser(userId) {
    return addAxios.post(`follow/${userId}`, {}).then(response => {
      return response.data;
    });
  },

  // loginUser() {
  //
  //     return  addAxios.get(`auth/me` ,)
  //
  //         .then(response => { return response.data  })
  //
  // },
};
