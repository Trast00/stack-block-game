
const Block = (props) => {
  return (
    <div id={props.id} 
    className={(props.id === "0") ? "block-wrapper block-static" : "block-wrapper" }
    style={{width:props.size, zIndex:props.id}}>
      
        {props.name} {props.id}
      
    </div>
  )
}

export default Block; 