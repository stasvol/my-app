import { setApiAxios } from './SetApiAxios';

export const settingApi = {
  setGetPage(pageSizeSet, currentPageSet) {
    return setApiAxios.get(`users?count=${pageSizeSet}&page=${currentPageSet}`);
    // axios.get(`https://social-network.samuraijs.com/
    // api/1.0/users?count=${this.props.pageSizeSet}
    //  &page=${this.props.currentPageSet}`,
    //  {withCredentials:true}).then(response => {
    //
    //     this.props.setIsLoad(false)
    //     this.props.settingAddUser(response.data.items)
    //     this.props.settingUserTotalCount(response.data.totalCount)
    //
    //
    // })
  },

  setGetUsers(pageSizeSet, currentPageSet) {
    return setApiAxios.get(`users?count=${pageSizeSet}&page=${currentPageSet}`);
    // axios.get(`https://social-network.samuraijs.com/
    // api/1.0/users?count=${this.props.pageSizeSet}
    // &page=${currentPageSet}`,{withCredentials:true })
  },
};
