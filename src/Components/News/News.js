import React from 'react';
import {NavLink} from "react-router-dom";

import {useNews} from "../../Hook/useNews";
// import photo from "../../Photo/Images/user.png";
// import axios from "axios";
// import {newDelUnfollow, newPostFollow} from "../Settings/Api/SetApiAxios";
// import {setFollowThunk} from "../Settings/Set_reducers/setUserReducer";
import NewsStatus from "./newsStatus";
import ContactNewForm from "./ContactNewForm"
import ContactUserNew from "./ContactUserNew";

import kot from './../../Photo/Images/kot.png'
import userGirl from './../../Photo/Images/user2.png'
import classes from './News.module.css';

const News = ({SetCurPage,countUsersSet,
                  pageSizeSet,showPhoto,
                  saveContacts,users,status,
                  newPutStatusThunk, isOwnerNew,
                  prof,isSetAuth,login,currentPageSet,
                  setUnfollowThunk,setFollowThunk,
                  setDisableBut}) => {

    // const [editMod, setEditMod] = useState(false)
    //
    // const onCurPageSet = (currentPageSet) => {
    //       SetCurPage(currentPageSet)
    // }
    //
    // const countPagesSet = Math.ceil((countUsersSet / pageSizeSet) / 150)
    // const pagesSet = []
    // for (let i = 1; i <= countPagesSet; i++)
    //     pagesSet.push(i)
    //
    // const addPhoto = (e) => {
    //     if (e.target.files.length) {
    //         showPhoto(e.target.files[0])
    //     }
    // }
    //
    // const onSubmit = (formData) => {
    //         saveContacts(formData)
    //         // .then( () => {
    //         //     setEditMod(false)
    //         // })
    //     setEditMod(false)
    //    // console.log(formData)
    // }
    //
    // const handleClick = (page) => onCurPageSet(page)
    // const handleEditContactNew = () =>{setEditMod(true)}
    const {editMod,pagesSet,addPhoto,onSubmit,
        handleClick,handleEditContactNew} =
        useNews(SetCurPage,countUsersSet,pageSizeSet,showPhoto,saveContacts)

    return (
        <div>
            {isSetAuth ? login : <NavLink to={'/Login'}>
                <button>LOGIN</button>
            </NavLink>}

            {
                pagesSet.map((page, i) => {
                    // const handleClick = (page) => onCurPageSet(page)
                        return <span onClick={handleClick(page)} key={i}
                                     className={currentPageSet === page
                                         ? classes.active :
                                         classes.pag}>{page}</span>
                    }
                )
            }
            <h3>News about Users</h3>
            <div>
                <span><b>STATUS :</b></span>
                <NewsStatus status={status} newPutStatusThunk={newPutStatusThunk}/>
            </div>

            <br/>
            {isOwnerNew &&
            <input type={'file'} onChange={addPhoto}/>
            }

            {
                users.map(({photos,followed,id}, i) => {
                    const handleSetFollow = () => setFollowThunk(id)
                    const handleSetUnfollow = () => setUnfollowThunk(id)
                    return <div key={i}>
                        <div>
                            {/*<NavLink to={'/Profile/'+u.id}>*/}
                            <img className={classes.kot} src={photos.small
                                ? photos.small
                                : kot} alt={'image'}/>
                            {/*</NavLink>*/}
                            <img src={prof.photos.small || userGirl} alt="" className={classes.kot}/>
                        </div>
                        {
                            followed

                                ? <button disabled={setDisableBut
                                    .some(userId => userId === id)} onClick={handleSetUnfollow
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    //     {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
                                    //     }
                                    // props.setLoadDisableBut(true,u.id)
                                    //     newDelUnfollow(u.id)
                                    //
                                    //     .then(response => {
                                    //
                                    //         if (response.data.resultCode===0){
                                    //             props.setUnFollow(u.id)
                                    //         }
                                    //         props.setLoadDisableBut(false,u.id)
                                    //     })
                                }>Unfollow</button>

                                : <button disabled={setDisableBut
                                    .some(userId => userId === id)} onClick={handleSetFollow
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                    //     {
                                    //         withCredentials: true,
                                    //         headers:{
                                    //             "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
                                    //         }
                                    //
                                    //     })
                                    // props.setLoadDisableBut(true,u.id)
                                    //
                                    // newPostFollow(u.id)
                                    //
                                    //     .then(response => {
                                    //
                                    //         if (response.data.resultCode===0){
                                    //
                                    //             props.setFollow(u.id)
                                    //
                                    //         }
                                    //         props.setLoadDisableBut(false,u.id)
                                    //     })
                                }>Follow</button>

                        }

                        { editMod
                            ? <ContactNewForm initialValues={prof} users={users} onSubmit={onSubmit} />
                            : <ContactUserNew editContactNew={handleEditContactNew} prof={prof}
                                              users={users}  isOwnerNew={isOwnerNew}/>
                        }
                        {/*<ContactUserNew users={props.users}/>*/}

                    </div>
                })
                // userId: required(integer)
                // lookingForAJob: required(boolean)
                // lookingForAJobDescription: required(string)
                // fullName: required(string)
                // contacts: required(object)
                // github: required(string)
                // vk: required(string)
                // facebook: required(string)
                // instagram: required(string)
                // twitter: required(string)
                // website: required(string)
                // youtube: required(string)
                // mainLink: required(string)
            }

        </div>
    )

}
// const ContactUserNew = ({isOwnerNew,editContactNew,prof, ...props}) => {
//
//     return(
//         <div>
//
//             { isOwnerNew && <button onClick={ editContactNew }>EDIT</button> }
//
//             <div>
//
//                 <span><b>Name :</b> {props.users.fullName}</span>
//             </div>
//             <div>
//
//                 <span><b>About Me :</b> {props.users.aboutMe}</span>
//             </div>
//             <div>
//
//                 <span><b>LookingForAJobDescription :</b> {props.users.LookingForAJobDescription}</span>
//             </div>
//
//             <div>
//
//                 <span><b>Contacts :</b> {props.users.contacts}</span>
//                 </div>
//             {/*<div>*/}
//             {/*    <div><b>Contacts:</b> {Object.keys(props.users.contacts).map(key => {*/}
//             {/*         return  <Contacts key={key} contactTitle={key} contactValue={props.users.contacts[key]} />*/}
//             {/*    })}</div>*/}
//             {/*</div>*/}
//                 <div>
//                 <span>github: {props.users.github}</span>
//                 </div>
//                 <div>
//                 <span>VK: {props.users.vk}</span>
//                 </div>
//                 <div>
//                 <span>Facebook: {props.users.facebook}</span>
//                 </div>
//                 <div>
//                 <span>Instagram: {props.users.instagram}</span>
//                 </div>
//                 <div>
//                 <span>Twitter: {props.users.twitter}</span>
//                 </div>
//
//               {/*<Contacts {...props}/>*/}
//         </div>
//     )
//
// }
//
//
// const Contacts = ({contactTitle, contactValue}) => {
//     return <div><b>{contactTitle}</b> : {contactValue}  </div>
//
// }
export default News