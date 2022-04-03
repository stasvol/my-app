import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './Header.module.css';
// import photo from "../../Photo/Images/kot.png";

const Header = ({isAuth, login, loginOut}) => (
    <header className={classes.header}>
        <img src={'https://img2.pngio.com/' +
            'logo-png-images-download-150000-logo-png-resources-with-logo-download-png-360_360.png'}
             alt={'image'}/>
        <div className={classes.log}>
            {isAuth
                ?
                <div>{login}
                    <button onClick={loginOut}>Log out</button>
                </div>
                : <NavLink to={'/login'}>LOGIN</NavLink>
            }
        </div>
    </header>
)

export default Header