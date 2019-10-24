import "./marquee.scss";
import css from "classnames";

import React from "react";


export default function Marquee ({
    text
}) {

    let nextweek = text === "Next Week";

    return (
        <div className={css("marquee", {sticky: !nextweek, nextweek})}>
            <div class="track">
                <span>{text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}</span>
                {/* <span>THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK THIS WEEK</span> */}
            </div>
        </div>
    )
}