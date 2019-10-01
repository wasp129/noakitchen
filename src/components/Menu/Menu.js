import React from "react";
import "./menu.scss";
import MenuItem from "../MenuItem/MenuItem";


export default function Menu (props) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


    return (
        <div className="menuwrapper">
            <ul>
                {weekdays.map(i => (
                    <li key={i}>
                    <MenuItem description="Tom Yum" weekday={i}></MenuItem>
                    </li>
                    ))}
                
            </ul> 
        </div>
        
        
    )
}