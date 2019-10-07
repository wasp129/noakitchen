import React from "react";
import './App.scss';

import Marquee from './Marquee/Marquee';
import Menu from './Menu/Menu';


function App() {
  return ( 
    <div className="appwrapper">
      <Marquee text="THIS WEEK"></Marquee>
      <Menu week="thisweek"></Menu>
      <Marquee text="NEXT WEEK"></Marquee>
      <Menu week="nextweek"></Menu>

    </div>
  );
}

export default App;
