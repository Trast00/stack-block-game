import { useState } from 'react';
import './App.css';
import ListBlock from './components/ListBlock';

const App = () => {
  const [gameState, setGameStarted] = useState("not started")
  const [score, setScore] = useState(-1)
  return (
    <div className="flex-center App">
      <h1>Click Tic Game</h1>
      {(score === -1)? "": <p>Game finished with score {score}</p>}
      {(gameState === "started")? <ListBlock finishGame={(score) => {setGameStarted("finished"); setScore(score)}} />: <button type='button' className='flex-center btn-full-screen btn-start' onClick={() => setGameStarted("started")}>Click below to start the game!</button>}
      <footer></footer>
    </div>
  );
}

export default App;
