import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [nbrBlock, setNbrBlock] = useState(-1)
  const [listBlock, setListBlock] = useState([])

  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    //remove the old animation
    if(listBlock.length>=1){
      //get the previous element
      const previousBlock = document.getElementById((listBlock.length-1).toString())
      //stop it
      previousBlock.style.backgroundColor = "blue"
      previousBlock.style.animationPlayState = "paused"
      //get his postion
      console.log('left: ', previousBlock.getBoundingClientRect().left)
      const left = previousBlock.getBoundingClientRect().left
      listBlock[listBlock.length-1] = <Block name="Dynamic" id={listBlock.length} key={listBlock.length} left={left}/>
    }

    
    //add a new animated block
    const newBlock = <Block name="Dynamic" id={listBlock.length} key={listBlock.length} left={0}/>
    listBlock.push(newBlock)
    setNbrBlock(listBlock.length)
    console.log("Clicked: ", listBlock, " nbr: ", nbrBlock)
  }

  return (
    <button type="submit" className="flex-center btn-full-screen list-wrapper" onClick={addBlock}>
      <p>Click anywhere to add a new block</p>
      <ul className="list-blocks">
        {(nbrBlock === 0)? listBlock : listBlock}
        
      </ul>
      <Block name="static" id="-1" key={-1} left={0} />
    </button>
    )
}

export default ListBlock;