import React from 'react';
import PropTypes from 'prop-types';

import ProfInfo from './ProfilInfo/ProfilInfo';
import ProfAvatar from './ProfAvatar/ProfAvatar';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, editProfile }) => (
  <div>
    <ProfInfo
      editProfile={editProfile}
      isOwner={isOwner}
      profile={profile}
      savePhoto={savePhoto}
      status={status}
      updateStatus={updateStatus}
    />
    <ProfAvatar />
    <MyPostContainer />

    {/* <MyPost PostData={props.state.PostData}
     newText={props.state.newText} dispatch={props.dispatch} */}
    {/*        addPost={props.addPost}  addChangeText={props.addChangeText} */}
    {/*        post={'MY POSTS'}/> */}
  </div>
);
Profile.propTypes = {
  profile: PropTypes.shape().isRequired,
  status: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
  isOwner: PropTypes.bool.isRequired,
  savePhoto: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
};

export default Profile;
