import React from 'react'
import ProfileDropDown from './leftPanelComponents/ProfileDropDown'
import SearchBox from './leftPanelComponents/SearchBox'

const profileStyle = {
  height: "60px"
}

function LeftPanel() {
  return (
    <div className="container-fluid h-100 p-3">
      <div className="row p-auto m-auto" style={profileStyle}>
        <div className="col-2"> 
        {/* profile */}
        <i className="fas fa-user fa-3x"></i>
        </div>
        <div className="col-10 d-flex justify-content-end p-0">
          <ProfileDropDown />
        </div>
      </div>
      <div className="row m-auto" style={profileStyle}>
        {/* search */}
        <SearchBox />
      </div>
      <div className="row m-auto" style={{height: "640px", overflow: "auto"}}>
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
        chat <br />
      </div>
    </div>
  )
}

export default LeftPanel
