import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [listBlock, setListBlock] = useState([])

  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    setListBlock([...listBlock, <Block name="Dynamic" key={listBlock.length}/>])
  }

  return (
    <ul className="list-blocks">
      
      <button type='submit' onClick={addBlock}>Add cube</button>

      {listBlock}

    </ul>
  )
}

export default ListBlock;