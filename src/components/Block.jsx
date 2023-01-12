import { useEffect } from "react";

const Block = (props) => {
  useEffect(()=> {
    const previousBlock = document.getElementById((props.id))
    console.log("left set:", props.left)
    previousBlock.style.left = props.left
  })
  return (
    <div id={props.id} 
    className={props.stopped? "block-wrapper block-stopped": "block-wrapper"}
    onClick={props.onBlockCliked}>
      {props.name} {props.id}
    </div>
  )
}

export default Block;