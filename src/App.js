import './App.css';
import MainHeader from './components/MainHeader';
import CustomList from './components/CustomList';

function App() {
  const array1 = ['apple', 'banana', 'orange'];
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <ul>
        {array1.map(v => {
          return <CustomList text={v}></CustomList>;
        })}
      </ul>
    </div>
  );
}

export default App;
