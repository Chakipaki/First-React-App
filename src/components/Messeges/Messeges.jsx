import React from 'react';
import s from './Messeges.module.css';
import {NavLink} from "react-router-dom";
function MessegeItem(props){
    let path = "/messeges/" + props.id;
    return(
        <div className={s.MessegeItem}>
            <div className={s.MessegeName}>
                <NavLink to={path} activeClassName={s.active}>{props.Name}</NavLink>
            </div>
        </div>
    )
}
function MessegesChat(props){
    return(
        <div>
            <div className={s.MessegesChat}>
                {props.messege}
            </div>
        </div>
    )
}
function Messeges(props){
    
    let chatNamesArray = 
        props.chatsName.map(item => <MessegeItem Name={item.name}  id={item.id}/>);
    
    
    let chatMessegesArray = 
        props.chatMesseger.map(item => <MessegesChat messege={item.messege}/>)
    return(
       <div  className={s.Messeges}>
           <section className={s.MessegesNames}>
               {chatNamesArray}
           </section>
           <section className={s.MessegesChats}>
                {chatMessegesArray}
             </section>
       </div>
    )
}

export default Messeges