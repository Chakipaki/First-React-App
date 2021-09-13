import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom';
function Nav(){
    return(
        <nav className={s.Nav}>
            <div className={s.Links}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink><br />
                <NavLink to="/messeges" activeClassName={s.active}>Messenger</NavLink><br />
                <NavLink to="/news" activeClassName={s.active}>News</NavLink><br />
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink><br />
            </div>
            <br />
            <div>Settings</div>
        </nav>
    )
}

export default Nav;