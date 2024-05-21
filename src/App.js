import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);

  const handleOnClickAdd = () => setCounter((value) => value + 1);
  const handleOnClickRemove = () => setCounter((value) => value - 1);

  return (
    <div className="App">
      <main>
        <div>
          <button onClick={handleOnClickAdd}>Add</button>
          <button onClick={handleOnClickRemove}>Remove</button>
        </div>
        <p>Count: {count}</p>
      </main>
    </div>
  );
}

export default App;
