import React from 'react';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColorc : 'black',
    color : 'aqua' , 
    fontSize : 24,
    padding : '1rem'
  }
  
  return (  
    <>
      {/* */}
      <div style ={style}>{name}</div>
      <div className = 'gray-box'></div>
    </>
  );
}

export default App;