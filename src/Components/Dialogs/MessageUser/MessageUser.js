import React from "react";

import classes from './MessageUser.module.css';

const MessageUser = ({message}) => (

        <div>
            <ul className={classes.messageUser}>
                <li>{message}</li>
            </ul>
        </div>
    )

export default  MessageUser