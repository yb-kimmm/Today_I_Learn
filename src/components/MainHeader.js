import React, { useState, useRef } from 'react';

function MainHeader() {
  const [name, setName] = useState({
    first: '상훈',
    last: '한',
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const { first, last } = name;

  const confirm = () => {
    setName({
      first: firstNameRef.current.value,
      last: lastNameRef.current.value,
    });
  };

  return (
    <div classname="App">
      <h1>
        {last}
        {first}
      </h1>
      <input name="성" placeholder="성" ref={lastNameRef}></input>
      <input name="이름" placeholder="이름" ref={firstNameRef}></input>
      <input type="button" value="확인" onClick={confirm}></input>
    </div>
  );
}

export default MainHeader;
