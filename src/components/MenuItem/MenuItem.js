import "./menuitem.scss";

import React from 'react';
import css from 'classnames';

export default function MenuItem ({
    description = "yumm",
    emoji = "🍔",
    week = "thisweek",
    weekday = "Monday",
    today,
    ...props
}) {
    
    return(
        <div class="menuitem-wrapper">
            <div className={css("menuitem", {"menuitem--active" : today === weekday})}>
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