import React from 'react';
import s from './Header.module.css'
import mops from "./mops.jpeg"
function Header(){
    return(
        <div className={s.Header}>
            <img src={mops} className={s.Header_icon}></img>
        </div>
    )
}

export default Header;