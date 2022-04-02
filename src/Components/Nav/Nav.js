import React from 'react';
import {NavLink} from "react-router-dom";

import SiteBar from './SiteBar/SiteBar'

import classes from './Nav.module.css';

const Navbar = ({siteBarNav,changeClick}) => (

        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to={'/Profile'} activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Dialogs'} activeClassName={classes.active}>Dialogs</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/News'} activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Music'} activeClassName={classes.active}>Music</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/User'} activeClassName={classes.active}>Users</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Setting'} activeClassName={classes.active}>Settings</NavLink></li>
                <li className={classes.item}><h2 className={classes.header}>FRIEND</h2></li>
            </ul>
            {siteBarNav.map(({id,name,img}) => <SiteBar id={id} name={name} img={img}
                                                        changeClick={changeClick}  key={id}/>
            )
            }
        </nav>

    )

export default Navbar