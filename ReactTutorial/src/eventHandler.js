import React from 'react';

function eventHandler() {
  const handleClick = (param) => {
    console.log(param);
  };

  const newHandleClick = (e) => {
    e.preventDefault();
    console.log('wrapper is clicked');
  };

  return <button onClick={() => handleClick('test')}>this is a button</button>;
}

export default eventHandler;
