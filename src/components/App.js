import React from 'react';
import './App.scss';
import Menu from './Menu/Menu';
import Nav from './Nav/Nav';

let url="https://spreadsheets.google.com/feeds/list/1DkFyeKVHJ4il9Z_MxT9deFf_D1uqDiNKjopiTLqnhd8/od6/public/values?alt=json";

function App() {

  // fetch(url);
  // async await fetch?


  return ( <>
    <Nav></Nav>
    <Menu></Menu>
    </>
  );
}

export default App;
