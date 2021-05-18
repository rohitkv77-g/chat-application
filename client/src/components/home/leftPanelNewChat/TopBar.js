import React from 'react'

function TopBar() {
  return (
    <>
    <div className="col-2 mt-auto mb-auto">
      {/* <button type="button" className="btn btn-default" aria-label="Left Align"> */}
      <i className="bi bi-chevron-left" style={{fontSize: "2rem", color: "black"}} onClick={() => {console.log('back')}}></i>
      {/* </button> */}
    </div>

    <div className="col-10 d-flex justify-content-end">
      <p className="text-right h1 mt-auto mb-auto">New Chat</p>
    </div>

    </>
  )
}

export default TopBar
