import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = (props) => {
  const [nbrBlock, setNbrBlock] = useState(-1)
  const [listBlock, setListBlock] = useState([])

  /*Stop a block and shrunk it 
     check to block stopped position and :
      -shrunk it and return width of the shrunked block (width of the new animated block)
      -if the block position is complety untacked return null (the user lose the game)*/
  const stopBlock = (id) => {
    //get the previous element
    const currentBlock = document.getElementById((id).toString())
      const staticBlock = document.getElementById((id-1).toString())

      const {left: start, right: end, width} = currentBlock.getBoundingClientRect()
      const {left: startPrevious, right: endPrevious} = staticBlock.getBoundingClientRect()
      /*if the block is before previous block starting and ending after previous block starting*/
      if(start<startPrevious && end>startPrevious){
        currentBlock.style.left = ((staticBlock.style.left==="")? 0: staticBlock.style.left).toString()
        currentBlock.style.width = ((start-startPrevious) + width).toString() + "px"
      }
      //if the block is between previous block starting and the previous block ending
      else if(start>startPrevious && start<endPrevious){
        currentBlock.style.width = (endPrevious-start).toString() + "px"
        /*Add the left value of the previous previous block if it's not null
          Because the left value is the left value compared ONLY to the previous block
          we need this left value to be the left value compared the all the previous block*/
        const previousBlocksLeft = parseInt((staticBlock.style.left==="")? 0: staticBlock.style.left)
        currentBlock.style.left = (start - startPrevious + previousBlocksLeft).toString() +"px"
      }
      //if the block is completly unstacked (before the previous block starting or after the previous block ending )
      else {
        return null //lose game
      }

      //return the width that will be the width of the new block
      return currentBlock.style.width
      
  }
  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    //remove the stop the previous bloc
    let blockWidth = 200
    if(listBlock.length>=1){
      blockWidth = stopBlock(listBlock.length-1)
    }
    
    //if the game is lost
    if(blockWidth === null && listBlock.length !==0){
      props.finishGame(listBlock.length)
      return
    }

    //add a new animated block
    const newBlock = <Block name="Dynamic" id={listBlock.length} key={listBlock.length} size={blockWidth}/>
    listBlock.push(newBlock)
    setNbrBlock(listBlock.length)
  }

  return (
    <button type="submit" className="flex-center btn-full-screen list-wrapper" onClick={addBlock}>
      <p>Click anywhere to add a new block</p>
      <ul className="list-blocks">
        {(nbrBlock === 0)? listBlock : listBlock}
        
      </ul>
      <Block name="static" id="-1" key={-1}/>
    </button>
    )
}

export default ListBlock;