import { useEffect } from 'react';
import { settingApi } from '../Components/Settings/Api/settingApi';

export const useSettingUsersContainer = (
  setIsLoad,
  pageSizeSet,
  currentPageSet,
  settingAddUser,
  settingUserTotalCount,
  SetCurPage,
) => {
  useEffect(() => {
    setIsLoad(true);
    settingApi.setGetPage(pageSizeSet, currentPageSet).then(response => {
      setIsLoad(false);
      settingAddUser(response.data.items);
      settingUserTotalCount(response.data.totalCount);
    });
  }, [pageSizeSet, currentPageSet, setIsLoad, settingAddUser, settingUserTotalCount]);

  const onCurPageSet = currentPageSet => {
    SetCurPage(currentPageSet);
    setIsLoad(true);
    settingApi.setGetUsers(pageSizeSet, currentPageSet).then(response => {
      setIsLoad(false);
      settingAddUser(response.data.items);
    });
  };
  return { onCurPageSet };
};
