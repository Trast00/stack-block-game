
const Block = (props) => {

  return (
    <div id={props.id} 
    className={props.stopped? "block-wrapper block-stopped": "block-wrapper"}>
      {props.name} {props.id}
    </div>
  )
}

export default Block;