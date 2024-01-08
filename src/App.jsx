import './App.css'
import Input from './components/Input'
import Keypad from './components/Keypad'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('');
  const keypadClick = (val) => {
    switch (val) {
      case '=':
        try{
          setInput(String(eval(input)));
        }catch(e){
          setInput('');
        }
        break;
      case 'c':
        setInput(input.slice(0,input.length - 1));
        break;
      case 'clear':
        setInput('');
        break;
      default:
        setInput(input + val);
    }
  }
  return (
    <div className='calculator'>
      <Input value={input} />
      <Keypad onKeypadClick={keypadClick} />
    </div>
  )
}

export default App
