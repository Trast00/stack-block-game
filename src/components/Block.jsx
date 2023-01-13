import { useEffect } from "react";

const Block = (props) => {
  let isNew = true

  return (
    <div id={props.id} 
    className="block-wrapper" style={{width:props.size}}>
      {props.name} {props.id}
    </div>
  )
}

export default Block;