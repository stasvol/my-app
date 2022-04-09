import React from 'react';

import PropTypes from 'prop-types';
import { useProfilInfo } from '../../../Hook/useProfilInfo';
import ProfilStatusHook from './ProfilStatusWithHook';
import ProfDataForm from './ProfDataForm';
import ProfData from './ProfData';

import kot from '../../../Photo/Images/kot.png';
import classes from './ProfilInfo.module.css';

const ProfInfo = ({
  profile,
  savePhoto,
  editProfile,
  status,
  isOwner,
  updateStatus,
  ...props
}) => {
  const { editMode, onPhotoChange, onSubmit, handleGoToEditMode } = useProfilInfo(
    profile,
    savePhoto,
    editProfile,
  );
  //     const [editMode, setEditMode] = useState(false);
  //
  //     if (!profile) return <Preloader/>
  //
  //     const onPhotoChange = (e) => {
  //         if (e.target.files.length) {
  //             savePhoto(e.target.files[0])
  //         }
  //     }
  //
  //     const onSubmit = (formData) => {
  //            editProfile(formData)
  //             .then(
  //                   () =>{
  //                   setEditMode(false);
  //                 }
  //         )
  //
  // // props.loginPost(formData.Email, formData.Password, formData.RememberMe)
  //         //  alert(formData.email,formData.password,formData.rememberMe)
  //         // console.log(formData)
  // }
  //        const handleGoToEditMode = () => setEditMode( true)
  return (
    <div>
      <div>
        <img
          alt=""
          className={classes.imgCont}
          src={
            'https://sites.google.com/site/prirodanasevseegooglgfgf/_' +
            '/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
          }
        />
      </div>
      <div className={classes.contact}>
        <div>
          <ProfilStatusHook status={status} updateStatus={updateStatus} />
          {/* eslint-disable-next-line max-len */}
          {/* <ProfilStatus status={props.status} updateStatus={props.updateStatus}/> */}
        </div>
        <div>
          <img alt="" className={classes.image} src={profile.photos.small || kot} />

          {isOwner && <input onChange={onPhotoChange} type="file" />}
        </div>
        {editMode ? (
          <ProfDataForm {...props} initialValues={profile} onSubmit={onSubmit} />
        ) : (
          <ProfData goToEditMode={handleGoToEditMode} {...props} isOwner={isOwner} />
        )}
      </div>
    </div>
  );
};
ProfInfo.propTypes = {
  profile: PropTypes.shape().isRequired,
  savePhoto: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  isOwner: PropTypes.bool.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

// const Contact = ({contactTitle, contactValue}) => {
//     return <div><b>{contactTitle}</b> : {contactValue} </div>
// }
//
// const ProfData = ({...props}) => {
//     return <div>
// {props.isOwner  &&  <button onClick={props.goToEditMode}>Edit</button>}
//
//                     <div><b>FullName</b> : {props.profile.fullName}</div>
//                     <div><b>About Me</b> : {props.profile.aboutMe} </div>
// <div><b>LookingForAJob</b> : {props.profile.lookingForAJob ? 'Yes' : 'No'}
//  <img className={classes.smail} src={smail} alt={'image'}/>
//                     </div>
//                  {props.profile.lookingForAJob &&
// <div><b>My professional skills</b> : {
// props.profile.lookingForAJobDescription}</div>
//                  }
//  <h4><b>Contacts</b> : </h4>
//  {Object.keys(props.profile.contacts).map(key => {
//   return <Contact key={key} contactTitle={key}
//   contactValue={props.profile.contacts[key]}/>
//                 })}
//
//  {/*<div> Facebook : {props.profile.contacts.facebook}</div>*/}
//                           {/*<div> VK : {props.profile.contacts.vk}</div>*/}
//  {/*<div> Twitter : {props.profile.contacts.twitter}</div>*/}
//  {/*<div> Instagram : {props.profile.contacts.instagram}</div>*/}
//  {/*<div> Git Hub : {props.profile.contacts.github}</div>*/}
//   {/*<div> Youtube : {props.profile.contacts.Youtube}</div>*/}
//   {/*<div>MainLink : {props.profile.mainLink}</div>*/}
//  {/*<div> FullName : {props.profile.fullName}</div>*/}
//   {/*<div>Photos : {props.profile.photos} </div>*/}
//     </div>
// }
export default ProfInfo;
