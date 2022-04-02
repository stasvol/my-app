import React from "react";
import {Redirect} from "react-router-dom";

import DialogContainer from "../Components/Dialogs/DialogContainer";
import ProfileContainer from "../Components/Profile/ProfileContainer";
import UserContainer from "../Components/Users/UserContainer";
import Music from "../Components/Music/Music";
import NewsContainer from "../Components/News/NewsContainer";
import SettingContainer from "../Components/Settings/SettingContainer";
import Error from "../Error/error";

export let PathDialogContainer = () => <DialogContainer />
export const PathRedirect = () => <Redirect to={'/Profile'} />
export let PathProfileContainer = () => <ProfileContainer/>
export let PathUserContainer = () => <UserContainer/>
export const PathVk = () => <div>vk</div>
export const PathMusic = () => <Music/>
export const PathNewsContainer = () => <NewsContainer/>
export const PathSettingContainer = () => <SettingContainer />
export const PathError = () => <Error/>