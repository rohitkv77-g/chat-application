import React from 'react'
import MessageComponent from './rightPanelComonents/MessageComponent'
const profileStyle = {
  height: "60px"
}

function RightPanel() {
  return (
    <div className="container-fluid border h-100 w-100 p-3">
      <div className="row m-auto border" style={profileStyle}>
        a
      </div>
      <div className="row m-auto " style={{ height: "663px", overflow: "auto" }}>
        <div className="container-fluid border align-items-end">


          <MessageComponent received={true} message="hello" />
          <MessageComponent received={false} message="hello" />
          <MessageComponent received={true} message="hello" />



        </div>
      </div>
      <div className="row m-auto border" style={profileStyle}>
        c
      </div>
    </div>
  )
}

export default RightPanel
