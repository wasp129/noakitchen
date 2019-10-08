import "./marquee.scss";

import React from "react";


export default function Marquee ({
    text
}) {

    return (
        <div className="marquee">
            <div class="track">
                <span>{text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}</span>
                {/* <span>THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK</span> */}
            </div>
        </div>
    )
}