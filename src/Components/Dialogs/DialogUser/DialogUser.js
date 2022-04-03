import React from "react";
import {NavLink} from "react-router-dom";

import classes from './DialogUser.module.css'

const DialogUser = ({id,img,name}) => {
    let path = '/dialogs/1' + id
    return (
        <div>
            <img className={classes.imgAvatar} src={img} alt={name} />

            <ul className={classes.dialogUser}>
                <li className={`${classes.user} `}>
                    <NavLink to={path} activeClassName={classes.active}>{name}</NavLink>
                </li>
            </ul>
        </div>
    )
}

export  default DialogUser