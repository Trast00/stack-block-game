import { useState } from "react"
import Block from "./Block.jsx"

const ListBlock = () => {
  const [listBlock, setListBlock] = useState([])

  return (
    <ul className="list-blocks">
      
      <button type='submit' onClick={addBlock}>Add cube</button>

      {listBlock}


    </ul>
  )
}

export default ListBlock;