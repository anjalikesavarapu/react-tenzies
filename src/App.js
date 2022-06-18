import React from 'react';
import './App.css';
import Die from './components/Die';



function App() {

  function allNewDice() {
    const newDice = []
    for (var i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDice
  }

  const [dice, setDice] = React.useState(allNewDice())

  return (
    <main>
      <div className='dice--container'>
        {dice.map((die) => <Die value={die} />)}
      </div>
    </main>
  );
}

export default App;
