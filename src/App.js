import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    lowerCase: true,
    upperCase: true,
    symbols: true,
    numbers: true,
  }
  render() {
    const {lowerCase, upperCase, symbols, numbers} = this.state
    return (
  <div className='rpg-bg'>
    <h1>Random Password Generator</h1>
    <div className='userInput-box'>
      <label htmlFor='passwordLength'>Password Length:</label>
      <input type="number" value="0" id='passwordLength'/>
      <button type='button' id='submitBtn'>Submit</button>
    </div>
    <div className='btn-box'>
      <button type='button' className='stateBtn' style={{
        backgroundColor: lowerCase? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
      >
      Lower Case
      </button>
      <button type='button' className='stateBtn' style={{
        backgroundColor: upperCase? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
      >
      Upper Case Case
      </button>
      <button type='button' className='stateBtn' style={{
        backgroundColor: symbols? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
      >
      Symbols
      </button>
      <button type='button' className='stateBtn' style={{
        backgroundColor: numbers? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
      >
      Numbers
      </button>
    </div>
    <p id='result'></p>
  </div>
  )  
  }
}

export default App;
