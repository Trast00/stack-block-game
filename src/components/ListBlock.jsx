import { useState } from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import soundstart from '../sound/soundstart.wav';
import soundstack from '../sound/soundstack.wav';
import songlose from '../sound/songlose.wav';

const ListBlock = (props) => {
  const { updateScore } = props;
  const [nbrBlock, setNbrBlock] = useState(-1);
  const [listBlock, setListBlock] = useState([]);
  const soundStack = new Audio(soundstack);

  /* Stop a block and shrunk it
     check to block stopped position and :
      -shrunk it and return width of the shrunked block (width of the new animated block)
      -if the block position is complety untacked return null (the user lose the game) */
  const stopBlock = (id) => {
    // get the previous element
    const currentBlock = document.getElementById((id).toString());
    const staticBlock = document.getElementById((id - 1).toString());

    const { left: start, right: end, width } = currentBlock.getBoundingClientRect();
    const { left: startPrevious, right: endPrevious } = staticBlock.getBoundingClientRect();
    /* if the block is before previous block starting and ending after previous block starting */
    if (start < startPrevious && end > startPrevious) {
      currentBlock.style.left = ((staticBlock.style.left === '') ? 0 : staticBlock.style.left).toString();
      currentBlock.style.width = `${((start - startPrevious) + width).toString()}px`;
    } else if (start > startPrevious && start < endPrevious) {
      // if the block is between previous block starting and the previous block ending
      currentBlock.style.width = `${(endPrevious - start).toString()}px`;
      /* Add the left value of the previous previous block if it's not null
          Because the left value is the left value compared ONLY to the previous block
          we need this left value to be the left value compared the all the previous block */
      const previousBlocksLeft = parseInt((staticBlock.style.left === '') ? 0 : staticBlock.style.left, 10);
      currentBlock.style.left = `${(start - startPrevious + previousBlocksLeft).toString()}px`;
    } else {
      /* if the block is completly unstacked
      (before the previous block starting or after the previous block ending ) */
      return null; // lose game
    }

    // return the width that will be the width of the new block
    return currentBlock.style.width;
  };
  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    // remove the stop the previous bloc
    let blockWidth = 200;
    if (listBlock.length >= 1) {
      blockWidth = stopBlock(listBlock.length);
      updateScore(listBlock.length);
    } else {
      // game started
      const soundStart = new Audio(soundstart);
      soundStart.play();
    }

    const restartGame = () => {
      setListBlock([]);
      document.getElementById('btn-start').onclick = addBlock();
      updateScore(-1);
    };

    // if the game is lost
    if (blockWidth === null && listBlock.length !== 0) {
      updateScore(listBlock.length - 1);
      document.getElementById(listBlock.length).style.display = 'none';
      document.getElementById('btn-start').onclick = () => { restartGame(); };

      const soundLose = new Audio(songlose);
      soundLose.play();
      return;
    }
    soundStack.play();

    // add a new animated block
    const newBlock = <Block name="Dynamic" id={listBlock.length + 1} key={listBlock.length + 1} size={blockWidth} />;
    listBlock.push(newBlock);
    setNbrBlock(listBlock.length);
  };

  return (
    <button id="btn-start" type="submit" className="flex-center btn-full-screen list-wrapper" onClick={addBlock}>
      <ul className="list-blocks">
        {(nbrBlock === 0) ? listBlock : listBlock}
      </ul>
      <Block name="static" id="0" key={0} />
    </button>
  );
};

ListBlock.propTypes = {
  updateScore: PropTypes.func.isRequired,
};

export default ListBlock;
