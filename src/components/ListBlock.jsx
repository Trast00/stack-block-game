import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [nbrBlock, setNbrBlock] = useState(-1)
  const [listBlock, setListBlock] = useState([])

  const stopBlock = (id) => {
      //get the previous element
      const currentBlock = document.getElementById((id).toString())
      const staticBlock = document.getElementById((-1).toString())

      //stop it
      const left = currentBlock.getBoundingClientRect().left
      const leftStatic = staticBlock.getBoundingClientRect().left
      currentBlock.style.left = (left-leftStatic).toString() +"px"
  }
  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    //remove the stop the previous bloc
    if(listBlock.length>=1){
      stopBlock(listBlock.length-1)
    }
    
    //add a new animated block
    const newBlock = <Block name="Dynamic" id={listBlock.length} key={listBlock.length}/>
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