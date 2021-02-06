import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count , setCount]=useState(0)
  useEffect(()=> count >=1 ? document.title = count : document.title = "React App",[count])
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Substract</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Addition</button>
    </div>
  );
}

export default App;