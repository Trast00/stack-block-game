import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [nbrBlock, setNbrBlock] = useState(-1)
  const [listBlock, setListBlock] = useState([])

  const stopBlock = (id) => {
      //get the previous element
      const currentBlock = document.getElementById((id).toString())
      const staticBlock = document.getElementById((id-1).toString())

      console.log(currentBlock.getBoundingClientRect())
      //stop it
      const {left, right, width} = currentBlock.getBoundingClientRect()
      const {left: leftStatic, right: rigthStatic, width: widthStatic} = staticBlock.getBoundingClientRect()
      /*if the left face of the block is outside the previous block range
      the right face (left+width) is inside the previousBlock range
      the element is smaller than th */
      if(left<leftStatic && right>leftStatic){
        //console.log("current", {left, right, width})
        //console.log("previous", {leftStatic, rigthStatic, widthStatic})
        //console.log(((staticBlock.style.left==="")? 0: staticBlock.style.left).toString() +"px")
        currentBlock.style.left = ((staticBlock.style.left==="")? 0: staticBlock.style.left).toString()
        currentBlock.style.width = ((left-leftStatic) + width).toString() + "px"
        //console.log("left<leftStatic", currentBlock.getBoundingClientRect())
      }
      //if the block is between starting and the ending previous Block
      else if(left>leftStatic && left<rigthStatic){
        //console.log("current", {left, right, width})
        //console.log("previous", {leftStatic, rigthStatic, widthStatic})
        //console.log('LEFT:', ((staticBlock.style.left==="")? 0: staticBlock.style.left.slice(0, staticBlock.style.left.length-2)))
        currentBlock.style.width = ((leftStatic+widthStatic)-left).toString() + "px"
        currentBlock.style.left = (left - leftStatic + ((staticBlock.style.left==="")? 0: parseInt((staticBlock.style.left==="")? 0: staticBlock.style.left.slice(0, staticBlock.style.left.length-2)))).toString() +"px" //problem here
        //console.log("left>leftStatic", currentBlock.getBoundingClientRect())
      }
      else {
        return null //lose game
      }

      return currentBlock.style.width
      
  }
  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    //remove the stop the previous bloc
    let blockWidth = 200
    if(listBlock.length>=1){
      blockWidth = stopBlock(listBlock.length-1)
    }
    
    console.log(blockWidth)
    //If the game is not lost
    if(blockWidth === null && listBlock.length !==0){
      console.log('lose')
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