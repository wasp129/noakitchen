import React, { useEffect } from 'react';
import './App.scss';
import Menu from './Menu/Menu';
import Nav from './Nav/Nav';

let url="https://spreadsheets.google.com/feeds/list/1DkFyeKVHJ4il9Z_MxT9deFf_D1uqDiNKjopiTLqnhd8/od6/public/values?alt=json";

function App() {

  let thisWeek = [];

  async function getContent() {
    const response = await fetch(url);
    const data = await response.json();
    thisWeek = data.feed.entry.filter(function(day) {
      return day.gsx$week.$t === "thisweek"
    });

    console.log(thisWeek);
    
    thisWeek.map(i => {
      let week = i.gsx$week.$t;
      let emoji = i.gsx$emoji.$t;
      let day = i.gsx$day.$t;
      let description = i.gsx$description.$t;
      let color = i.gsx$color.$t;
      console.log(`${week}, ${emoji}, ${day}, ${description}, ${color}`);
      });
    }

    useEffect(() => {
      // https://reactjs.org/docs/hooks-effect.html
      // use to make componentdidmount
    })
  let menu = getContent();
  console.log(menu)

  return ( 
    <div className="appwrapper">
    {/* <Nav></Nav> */}
    <Menu props={menu}></Menu>
    </div>
  );
}

export default App;
