import { useState } from 'react';
import './App.css';
import ListBlock from './components/ListBlock';

const App = () => {
  const [score, setScore] = useState(-1)
  return (
    <div className="flex-center App">
      <h1>Click Tic Game</h1>
      <ListBlock finishGame={(score) => {setGameStarted("finished"); setScore(score)}}
      updateScore={(score) => setScore(score)}
      />
      <footer></footer>
      {(score <= 0)? "": <p className='score-popup'>Score: {score}</p>}
    </div>
  );
}

export default App;
