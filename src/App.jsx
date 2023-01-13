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
      <h1>Click Tic Game</h1>
      {isGameStarted? <ListBlock />: <button type='button' className='flex-center btn-full-screen btn-start' onClick={changeGameState}>Click below to start the game!</button>}
      <footer></footer>
    </div>
  );
}

export default App;
