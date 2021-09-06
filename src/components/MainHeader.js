import React, { useState } from 'react';

function MainHeader() {
  const [text, setText] = useState('Hello');

  const onChange = e => {
    const inputText = e.target.value;
    console.log(e.target);

    setText(inputText);
  };

  return (
    <div classname="App">
      <h1>{text}</h1>
      <input onChange={onChange}></input>
    </div>
  );
}

export default MainHeader;
