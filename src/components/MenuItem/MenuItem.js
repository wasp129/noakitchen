import React from 'react';
import "./menuitem.scss";

export default function MenuItem ({
    emoji = "🍔",
    weekday ="Monday",
    description = "yumm",
    ...props
}) {


    
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