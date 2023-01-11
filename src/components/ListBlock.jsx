import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [listBlock, setListBlock] = useState([])

  /* Add a block to the listBlock and render the block */
  const addBlock = () => {
    setListBlock([...listBlock, <Block name="Dynamic" key={listBlock.length}/>])
  }

  return (
    <button type="submit" className="flex-center btn-full-screen list-wrapper" onClick={addBlock}>
      <p>Click anywhere to add a new block</p>
      <ul className="list-blocks">
        {listBlock}
        <Block name="static" />
      </ul>
    </button>
    )
}

export default ListBlock;