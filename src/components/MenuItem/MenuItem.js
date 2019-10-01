import React from 'react';
import "./menuitem.scss";

const MenuItem = (props) => {
const emoji = props.emoji;
const weekday = props.weekday || "Monday";
const description = props.description;
    
    return( <>
    <div className="emoji">{emoji}</div>
    <div className="menu--right">
    <div className="weekday">{weekday}</div>
    <div className="description">
        <p>{description}</p>
    </div>
    </div>
        </>
    ) 
}

export default MenuItem;