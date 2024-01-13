import React, { useState } from "react";
import "./App.css"

const App=()=>{
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (!number1.trim() ) {
      setErrorMessage('num1 cannot be empty');
      setResult(null);
      return false;
    }else if(!number2.trim()){
      setErrorMessage('num2 cannot be empty');
      setResult(null);
      return false;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Please enter valid numbers.');
      setResult(null);
      return false;
    }

    // Additional validation logic if needed

    setErrorMessage('');
    return true;
  };

  const performOperation = (operator) => {
    if (validateInputs()) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      switch (operator) {
        case 'add':
          setResult(num1 + num2);
          break;
        case 'subtract':
          setResult(num1 - num2);
          break;
        case 'multiply':
          setResult(num1 * num2);
          break;
        case 'divide':
          setResult(num1 / num2);
          break;
        default:
          setResult(null);
      }
    }
    // setErrorMessage("")
    // setResult();
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" placeholder="num1" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <input type="text" placeholder="num2" value={number2} onChange={(e) => setNumber2(e.target.value)} />
<div className="all-btns">
      <button onClick={() => performOperation('add')}>+</button>
      <button onClick={() => performOperation('subtract')}>-</button>
      <button onClick={() => performOperation('multiply')}>*</button>
      <button onClick={() => performOperation('divide')}>/</button>

</div>
     
      {errorMessage && <div><p style={{ color: 'red'}}>Error</p>  <p >{errorMessage}</p></div>  }
      {result !== null && result!==NaN &&  <div><p style={{ color: 'green'}}>Success!</p><p >Result: {result}</p></div> }
    </div>
  );
}


export default App;