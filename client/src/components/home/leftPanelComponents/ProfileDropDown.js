import React from 'react'
import {connect} from 'react-redux'
import {newChat, newGroup, logOut, profile, home} from '../../../redux/leftPanel/leftPanelAction'

const newChatHandler = () => {
  console.log('new chat handler started')
}

function ProfileDropDown(props) {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        
  </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#" onClick={() => props.newChat()}>New Chat</a></li>
        <li><a className="dropdown-item" href="#">New Group</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><a className="dropdown-item" href="#">Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        newChat: () => dispatch(newChat()),
        newGroup: () => dispatch(newGroup()),
        logOut: () => dispatch(logOut()),
        profile: () => dispatch(profile()),
        home: () => dispatch(home())
    }
}

export default connect(null, mapDispatchToProps)(ProfileDropDown)
