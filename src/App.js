import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const myStyle = {
  backgroundColor: "purple",
  padding: "15px",
  border: "1px solid gray",
  borderRadius: "15px"
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter () {
  const [count, countPlus] = useState(0);
  const handleIncrease = () => (countPlus(count+1));
  const handleDecrease = () => (countPlus(count-1));
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase </button>
      <button onClick={handleDecrease}>Decrease </button>
    </div>
  )
}

export default App;
