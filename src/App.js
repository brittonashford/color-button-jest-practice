import { useState } from 'react';
import './App.css';

function App() {
    const [ buttonColor, setButtonColor ] = useState('red');
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
        <button 
            onClick={() => setButtonColor(newButtonColor)} 
            style={{background: buttonColor}}
        >
            Change to {newButtonColor}
        </button>
    </div>
  );
}

export default App;
