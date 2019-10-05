import React from 'react';
import "./menuitem.scss";

export default function MenuItem ({
    color= "4444ee",
    description = "yumm",
    emoji = "🍔",
    week = "thisweek",
    weekday ="Monday",
    ...props
}) {

    const itemStyle = {
        backgroundColor: `#${color}`
    }


    
    return(
        <div class="menuitem-wrapper">
            <div className="menuitem" style={itemStyle}>
                <div className="emoji"><span>{emoji}</span></div>
                <div className="menuitem--right">
                    <div className="weekday"><p>{weekday}</p></div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                </div>
        </div>
        
    ) 
}