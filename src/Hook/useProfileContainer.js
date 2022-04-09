import { useCallback, useEffect } from 'react';

export const useProfileContainer = (
  match,
  authorisedUserId,
  getUsers,
  getStatus,
  history,
) => {
  const userUpdateProfile = useCallback(() => {
    let { userId } = match.params;

    if (!userId) {
      userId = authorisedUserId;
      if (!userId) {
        userId = history.push('/login');
      }
    }
    getUsers(userId);
    getStatus(userId);
  }, [match.params, getUsers, getStatus, authorisedUserId, history]);
  useEffect(() => {
    userUpdateProfile();
  }, [match.params.userId, userUpdateProfile]);

  return { userUpdateProfile, getUsers, getStatus };
};
