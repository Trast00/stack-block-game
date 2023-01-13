import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [nbrBlock, setNbrBlock] = useState(-1)
  const [listBlock, setListBlock] = useState([])

  const stopBlock = (id) => {
      //get the previous element
      const currentBlock = document.getElementById((id).toString())
      const staticBlock = document.getElementById((-1).toString())

      console.log(currentBlock.getBoundingClientRect())
      //stop it
      const {left, right, width} = currentBlock.getBoundingClientRect()
      const {left: leftStatic, right: rigthStatic, width: widthStatic} = staticBlock.getBoundingClientRect()
      /*if the left face of the block is outside the previous block range
      the right face (left+width) is inside the previousBlock range
      the element is smaller than th */
      if(left<leftStatic && right>leftStatic){
        console.log("current", {left, right, width})
        console.log("previous", {leftStatic, rigthStatic, widthStatic})
        currentBlock.style.left = (0).toString() +"px"
        currentBlock.style.width = ((left-leftStatic) + width).toString() + "px"
        console.log("left<leftStatic", currentBlock.getBoundingClientRect())
      }
      //if the block is between starting and the ending previous Block
      else if(left>leftStatic && left<rigthStatic){
        console.log("current", {left, right, width})
        console.log("previous", {leftStatic, rigthStatic, widthStatic})
        currentBlock.style.width = ((leftStatic+widthStatic)-left).toString() + "px"
        currentBlock.style.left = (widthStatic - ((leftStatic+widthStatic)-left)).toString() +"px"
        console.log("left>leftStatic", currentBlock.getBoundingClientRect())
      }
      else {
        console.log('YOU LOSE')
      }

      //IMPORTANT : currentBlock.style.left = (left-leftStatic).toString() +"px"

      //shrink the block
      //console.log("Width: ", staticBlock.getBoundingClientRect().width)
      //console.log((left-leftStatic) - staticBlock.getBoundingClientRect().width)
      
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