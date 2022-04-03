import React from 'react';

import classes from './SiteBar.module.css';
// import {handleChangeActionCreator} from "../../../Redux/prof_reducer";

const SiteBar = ({name,img,id}) => (

        <div key={id} className={classes.block}>
            <img className={classes.imgAvat} src={img} alt={id}/>
            <span className={classes.text}>{name}</span>
        </div>
    )

export default SiteBar