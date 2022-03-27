
export const getUsersSelector = ({usersPage:{users}}) => users

export const pageSizeSelector = ({usersPage:{pageSize}}) => pageSize

export const totalUsersCountSelector = ({usersPage:{totalUsersCount}}) => totalUsersCount

export  const currentPageSelector = ({usersPage:{currentPage}}) => currentPage

export const isLoadingSelector = ({usersPage:{isLoading}}) => isLoading

export const disableButtonSector = ({usersPage:{disableButton}}) => disableButton


// export const getUsersSelector = (state) => {
//     return state.usersPage.users
// }
// export const pageSizeSelector = (state) =>{
//     return state.usersPage.pageSize
// }
// export const totalUsersCountSelector = (state) =>{
//     return state.usersPage.totalUsersCount
// }
// export  const currentPageSelector = (state) =>{
//     return state.usersPage.currentPage
// }
// export const isLoadingSelector = (state) =>{
//     return state.usersPage.isLoading
// }
// export const disableButtonSector = (state) =>{
//     return state.usersPage.disableButton
// }
