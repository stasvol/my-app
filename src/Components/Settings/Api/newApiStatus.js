import {setApiAxios} from "./SetApiAxios";

export const newApiStatus = {
    newGetStatus: (userId) => setApiAxios.get(`Profile/status/${userId}`),

    newPutStatus: (status) => setApiAxios.put(`Profile/status`,{status:status}),

    showPutPhoto(photoFile)  {
        const formData = new FormData
        formData.append("image", photoFile)

        return setApiAxios.put(`Profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    savePutContacts: (prof) => setApiAxios.put(`Profile`,prof)

}