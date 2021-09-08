import React, { useState, useRef } from 'react';

function MainHeader() {
  const [tasks, setTask] = useState([
    {
      id: 0,
      text: '강의 듣기.',
    },
  ]);
  const inputRef = useRef();

  const confirm = () => {
    const text = inputRef.current.value;
    setTask([
      ...tasks,
      {
        id: tasks[tasks.length - 1].id + 1,
        text,
      },
    ]);
  };

  return (
    <div classname="App">
      <div>
        <input placeholder="내 목표" ref={inputRef}></input>
        <input type="button" value="확인" onClick={confirm}></input>
      </div>
      <ul>
        {tasks.map((v, index) => (
          <li key={index}>{v.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainHeader;
