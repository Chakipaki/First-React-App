import React from 'react';
import s from './Profile.module.css';
import mops from "./mops.jpeg";
import header from "./header.JPG";

function Messege(props){
    return(
        <div className={s.Messege}>
            <img src={mops} alt="" className={s.MsAva}/>
            <p className={s.MessegeText}>{props.text}</p>
        </div>
    )
}

function UserInformation(props){
    return(
        <section className={s.UserInformation}>
            <h2 className={s.FirstName}>First name: {props.FrstNm}</h2>
            <h2 className={s.SecondName}>Second name: {props.ScNm}</h2>
            <h2 className={s.Job}>Job: {props.Job}</h2>
            <h2 className={s.Entertaintment}>Enterteintment: {props.Entr}</h2>
        </section>
    )
}
function Profile(props){
    let MyPosts = props.postsText.map((item) => <Messege icon = {item.icon} text={item.text}/>)
    return(
        <div className={s.Profile}>
            <header className={s.Header}>
                <img src={header} alt="Header Profile" className={s.HeadIcon}/>
            </header>
            <section className={s.Information}>
                <img src={mops} alt="Avatarka" className={s.Avatarka}/>
                <UserInformation /*FrstNm="Ivan" ScNm="Bieliaiev" Job="Frontent developer" Entr="Orienteering"*/ />
            </section>
            <section className={s.Messeges}>
                {MyPosts}
            </section>
        </div>
    )
}

export default Profile;