import React from "react";
import axios from "axios";
import './App.scss';
import Menu from './Menu/Menu';
// import Nav from './Nav/Nav';


function App() {
  //   thisWeek.map(i => {
  //     let week = i.gsx$week.$t;
  //     let emoji = i.gsx$emoji.$t;
  //     let day = i.gsx$day.$t;
  //     let description = i.gsx$description.$t;
  //     let color = i.gsx$color.$t;
  //     // console.log(`${week}, ${emoji}, ${day}, ${description}, ${color}`);
  //     });
  //   }

  return ( 
    <div className="appwrapper">
    {/* <Nav></Nav> */}
    <Menu></Menu>
    </div>
  );
}

export default App;
