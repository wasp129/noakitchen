import React from 'react';
import "./menuitem.scss";

export default function MenuItem (props) {
    const emoji = props.emoji || "🍔";
    const weekday = props.weekday || "Monday";
    const description = props.description;
    
    return(
        <div className="menuitem">
            <div className="emoji"><span>{emoji}</span></div>
            <div className="menuitem--right">
                <div className="weekday"><p>{weekday}</p></div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    ) 
}