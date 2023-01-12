
const Block = (props) => {

  return (
    <div id={props.id} 
    className="block-wrapper">
      {props.name} {props.id}
    </div>
  )
}

export default Block;