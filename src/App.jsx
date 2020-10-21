import React, { useState  } from 'react';
import './App.css';
import { NameList } from './components/NameList';

function App() {
  const [value, setValue] = useState('');

  const removeDollarSign = value => (value[0] === '$' ? value.slice(1) : value)
  const getReturnValue = value => (value === '' ? '' : `$${value}`)

  const handleChange = ev => {
    ev.preventDefault();
    const inputtedValue = ev.currentTarget.value;
    const noDollarSign = removeDollarSign(inputtedValue);
    if (isNaN(noDollarSign)) return
    setValue(getReturnValue(noDollarSign))
  }

  const handleClick = () => {
    if(value){
      alert('Thanks for contribution');
      setValue('');
    } else {
      alert('Please enter a value');
    }
  }

  return (
    <React.Fragment>
      <div className="App">
        <h1>Mission - Save Dogs!</h1> 
        <h4>Even a small contribution would make a difference</h4>
        <input value={value} aria-label="cost-input" onChange={handleChange} />
        <button onClick={handleClick} >Donate</button>
        <h4>Our Top Contributors</h4>
        <NameList />
      </div>
    </React.Fragment>
    )
}

export default App;
