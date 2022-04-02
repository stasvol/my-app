import React from 'react';

import classes from './SiteBar.module.css';
// import {handleChangeActionCreator} from "../../../Redux/prof_reducer";

const SiteBar = ({name,img,id}) => {

    const changeClick = () => {
        alert('HELLO FRIEND - ' + name);
        // let action = handleChangeActionCreator();
        // props.dispatch(action)
        // props.store.dispatch(handleChangeActionCreator());
        // props.changeClick(props.id);
    }

    return (
        <div className={classes.block}>
            <img onClick={changeClick} className={classes.imgAvat} src={img} alt={id}/>
            <span className={classes.text}>{name}</span>
        </div>
    )
}

export default SiteBar