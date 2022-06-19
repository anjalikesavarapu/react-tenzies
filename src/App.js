import React from 'react';
import './index.css';
import Die from './components/Die';



function App() {

  const [dice, setDice] = React.useState(allNewDice())
  function allNewDice() {
    const newDice = []
    for (var i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <main>
      <div className='dice--container'>
        {dice.map((die) => <Die value={die} />)}
      </div>
      <button onClick={rollDice} className="btn-roll-dice">Roll Dice</button>
    </main>
  );
}

export default App;
