import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    lowerCase: true,
    upperCase: false,
    symbols: true,
    numbers: false,
    passwordLength: 0,
    result: '',
  }

  toggleLowerCase = () => {
    this.setState((prevState) => ({
      lowerCase: !prevState.lowerCase
    }))
  }

  toggleUpperCase = () => {
    this.setState((prevState) => ({
      upperCase: !prevState.upperCase
    }))
  }

  toggleSymbols = () => {
    this.setState((prevState) => ({
      symbols: !prevState.symbols
    }))
  }

  toggleNumbers = () => {
    this.setState((prevState) => ({
      numbers: !prevState.numbers
    }))
  }

  onChangePasswordLength = event => {
    this.setState({passwordLength: event.target.value})
  }

  generatePassword = () => {
  const {lowerCase, upperCase, symbols, numbers, passwordLength} = this.state

  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const symbolsChars = "!@#$%^&*~?"
  const numbersChars = "0123456789"

  let allowedChars = ""
  let randomPassword = ""

  allowedChars += lowerCase ? lowerCaseChars : ""
  allowedChars += upperCase ? upperCaseChars : ""
  allowedChars += symbols ? symbolsChars : ""
  allowedChars += numbers ? numbersChars : ""

  const length = Number(passwordLength)

  if (length <= 0) {
    this.setState({result: "Password length must be at least 1 character"})
    return
  }

  if (allowedChars.length === 0) {
    this.setState({result: "At least one character set must be selected"})
    return
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length)
    randomPassword += allowedChars[randomIndex]
  }

  this.setState({result: randomPassword})
}


  render() {
    const {lowerCase, upperCase, symbols, numbers, passwordLength, result} = this.state
    return (
  <div className='rpg-bg'>
    <h1>Random Password Generator</h1>
    <div className='userInput-box'>
      <label htmlFor='passwordLength'>Password Length:</label>
      <input type="number" value={passwordLength} id='passwordLength' max="15" onChange={this.onChangePasswordLength}/>
      <button type='button' id='submitBtn' onClick={this.generatePassword}>Submit</button>
    </div>
    <div className='btn-box'>
      <button type='button' className='stateBtn' style={{
        backgroundColor: lowerCase? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
        onClick={this.toggleLowerCase}
      >
      Lower Case
      </button>
      <button type='button' className='stateBtn' style={{
        backgroundColor: upperCase? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
        onClick={this.toggleUpperCase}
      >
      Upper Case Case
      </button>
      <button type='button' className='stateBtn' style={{
        backgroundColor: symbols? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
        onClick={this.toggleSymbols}
      >
      Symbols
      </button>
      <button type='button' className='stateBtn' style={{
        backgroundColor: numbers? 'hsl(120, 77%, 50%)': 'hsl(0, 100%, 50%)',
        }}
        onClick={this.toggleNumbers}
      >
      Numbers
      </button>
    </div>
    <p id='result'>{`Password Generated: ${result}`}</p>
  </div>
  )  
  }
}

export default App;
