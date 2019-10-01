import React from 'react';
import "./nav.scss";

export default function Nav(props){
    const currentWeek = props.currentWeek;

    return (
        <div className="nav">
            {!currentWeek && 
                <div className="nav-next"><span>Next week →</span></div>
            }
            {!currentWeek && 
                <div className="nav-prev"><span>← Previous week</span></div>
            }
        </div>
    )
}