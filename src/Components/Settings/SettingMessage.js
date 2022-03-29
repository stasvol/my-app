import React from 'react';

import {useSettingMessage} from "../../Hook/useSettingMessage";
import {SetMessageFormRedux} from "./setMessageForm";

import classes from './Setting.module.css';

const SettingMessage = ({posts,addText}) => {

    const {addPostNewMes,handleAddText} = useSettingMessage(posts,addText)

    return (
        <div className={classes.post}>
            <SetMessageFormRedux onSubmit={handleAddText}/>
            {addPostNewMes}
        </div>
    )

    }

    export default SettingMessage




