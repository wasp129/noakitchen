import React from "react";
import axios from "axios";
import './App.scss';
import Menu from './Menu/Menu';
// import Nav from './Nav/Nav';


function App() {
  return ( 
    <div className="appwrapper">
    {/* <Nav></Nav> */}
    <Menu></Menu>
    </div>
  );
}

export default App;
