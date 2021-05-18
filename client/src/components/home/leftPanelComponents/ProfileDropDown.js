import React from 'react'

const newChatHandler = () => {
  console.log('new chat handler started')
}

function ProfileDropDown() {
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
        <li><a className="dropdown-item" href="#" onClick={newChatHandler}>New Chat</a></li>
        <li><a className="dropdown-item" href="#">New Group</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><a className="dropdown-item" href="#">Log Out</a></li>
      </ul>
    </div>
  )
}

export default ProfileDropDown
