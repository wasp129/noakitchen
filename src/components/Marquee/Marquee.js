import "./marquee.scss";

import React from "react";


export default function Marquee ({
    text
}) {

    return (
        <div className="marquee">
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
        </div>
    )
}