import React from 'react';
import ProfInfo from './ProfilInfo/ProfilInfo'
import ProfAvatar from './ProfAvatar/ProfAvatar'
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = ({profile,status,updateStatus,isOwner,savePhoto,editProfile}) => (

        <div>
            <ProfInfo profile={profile} status={status} updateStatus={updateStatus}
                      isOwner={isOwner} savePhoto={savePhoto}
                      editProfile={editProfile}/>
            <ProfAvatar />
            <MyPostContainer />

            {/*<MyPost PostData={props.state.PostData} newText={props.state.newText} dispatch={props.dispatch}*/}
            {/*        addPost={props.addPost}  addChangeText={props.addChangeText}*/}
            {/*        post={'MY POSTS'}/>*/}

        </div>
    )

export default Profile