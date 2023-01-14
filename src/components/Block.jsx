
const Block = (props) => {
  return (
    <div id={props.id} 
    className="block-wrapper" style={{width:props.size}}>
      {props.name} {props.id}
      
    </div>
  )
}

export default Block;