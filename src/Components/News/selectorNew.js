 import React from "react";
 import {createSelector} from "reselect";
 export const newUsers = ({users:{users}}) => users;
export const newCountUsersSet = ({users:{countUsersSet}}) => countUsersSet;
export const newPageSizeSet = ({users:{pageSizeSet}}) => pageSizeSet;
export const newCurrentPageSet = ({users:{currentPageSet}}) => currentPageSet;
export const newIsLoad = ({users:{isLoad}})=> isLoad;
export const newProf = ({users:{prof}}) => prof;
 export const newSetDisableBut = ({users:{setDisableBut}}) => setDisableBut;
 export const newStatus = ({users:{status}}) => status;
export const newIsSetAuth = ({setAuth:{isSetAuth}}) => isSetAuth;
export const newLogin = ({setAuth:{login}}) => login;
export const newIdAuth = ({setAuth:{id}}) => id;

// export const newUsersReselector = createSelector(newUsers,newIsLoad,
//     (users,isLoad)=>{
//     return  users.filter(users=>true)
//     })
