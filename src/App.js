import React from 'react';
import './App.css';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';

function App() {
  return(
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink"/>

        <Counter/>

        <InputSample/>
      </Wrapper>
    </>
  )
}



export default App;