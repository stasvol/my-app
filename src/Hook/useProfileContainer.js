import {useEffect} from "react";

export const useProfileContainer = (match,authorisedUserId,getUsers,getStatus,history) => {

    const userUpdateProfile = () => {
        let userId = match.params.userId;

        if (!userId){

            userId = authorisedUserId
            if (!userId) {
                userId = history.push('/login')
            }
        }
        getUsers(userId)
        getStatus(userId);
    }
    useEffect(()=>{
        userUpdateProfile()
    },[match.params.userId])

    return {userUpdateProfile,getUsers,getStatus}
}
