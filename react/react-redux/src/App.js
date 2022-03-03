import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainers from './containers/TodosContainers';

function App() {
  return (
    <div>
        <CounterContainer/>
        <hr/>

        <TodosContainers/>
    </div>
  );
}

export default App;
