import React, { useState, useEffect } from "react";
import axios from "axios";

import "./menu.scss";
import MenuItem from "../MenuItem/MenuItem";

let url="https://spreadsheets.google.com/feeds/list/1DkFyeKVHJ4il9Z_MxT9deFf_D1uqDiNKjopiTLqnhd8/od6/public/values?alt=json";

export default function Menu (props) {
    const [data, setData] = useState([]);

    //get today's day
    let today = new Date(Date.now()).toLocaleDateString("en-us", { weekday: "long"});
    
    useEffect(() => {

        async function fetchData(){
          let response = await axios(url);
          let dayArray = await response.data.feed.entry.filter(function(day) {
            return day.gsx$week.$t === "thisweek"
          });
          let thisWeek = await dayArray.map(day => ({
            week: day.gsx$week.$t,
            emoji: day.gsx$emoji.$t,
            day: day.gsx$day.$t,
            description: day.gsx$description.$t,
          }))
          setData(thisWeek);
        }
    
        fetchData();

      }, [])

    return (
        <>
        <div className="menuwrapper">
            <ul>

                {console.log(data)}
                {data.map(i => 
                    (<li key={i.day}>
                        <MenuItem 
                        description={i.description}
                        emoji={i.emoji}
                        week={i.week}
                        weekday={i.day}
                        today={today}
                         />
                    </li>)

                    )}
                
            </ul> 
        </div>
        </>
    )
}