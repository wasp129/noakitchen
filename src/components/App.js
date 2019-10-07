import React from "react";
import './App.scss';

import Marquee from './Marquee/Marquee';
import Menu from './Menu/Menu';


function App() {
  return ( 
    <div className="appwrapper">
      <Marquee></Marquee>
      <Menu></Menu>
    </div>
  );
}

export default App;
