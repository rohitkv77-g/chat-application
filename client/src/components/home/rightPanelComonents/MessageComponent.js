import React from 'react'

function MessageComponent(props) {
  
  let align = "justify-content-end";
  if(props.received)
    align = "justify-content-start";

  
  return (
    <div className={`row ${align} mt-2 mb-2`}>
      <div className={`col-8 border d-flex ${align}`}>
        {props.message}
      </div>
    </div>
  )
}

export default MessageComponent
