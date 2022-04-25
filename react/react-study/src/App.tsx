import React from 'react';
import TodosContainers from './containers/TodosContainers';

export interface Todo{
  id : number; 
  text : string ; 
  done : boolean;
}

function App() {
  return (
    <div className="App">
      <TodosContainers/>
    </div>
  );
}

export default App;
