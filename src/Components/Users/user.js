import React from 'react'
import {NavLink} from "react-router-dom";

import photo from "../../Photo/Images/user.png";
import classes from "./user.module.css";

const User = ({user:{id,photos,followed,name,status},disableButton,unFollowThunkCreator,FollowThunkCreator}) => {
 const handleUnfollow = () => unFollowThunkCreator(id)
 const handleFollow = () => FollowThunkCreator(id)
    return (

        <div>
             <div>
                    <div>
                        {/*<img src={user.photoUrl} className={classes.photo}/>*/}
                        <NavLink to={'/Profile/' + id}>
                        <img src={photos.small != null ? photos.small : photo} alt={'image'} className={classes.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {followed
                            ? <button disabled={disableButton.some(userId => userId === id)}
                                      onClick={handleUnfollow}>
                                UnFollow
                              </button>

                            : <button disabled={disableButton.some(userId => userId === id)}
                                      onClick={handleFollow}>
                                Follow
                              </button>
                        }

                    </div>
                    <div>{name}</div>
                    <div>{status}</div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>

                </div>)
            }
        </div>
    )


}

export default User