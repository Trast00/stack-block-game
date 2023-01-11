import { useState } from 'react';
import './App.css';
import ListBlock from './components/ListBlock';

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false)
  const changeGameState = () => {
    if (!isGameStarted){
      setGameStarted(true)
    }
  }
  return (
    <div className="flex-center App">
      <h1>Stack Block Game</h1>
      {isGameStarted? <ListBlock />: <p className='flex-center btn-start' onClick={changeGameState}>Click below to start the game!</p>}
    </div>
  );
}

export default App;
