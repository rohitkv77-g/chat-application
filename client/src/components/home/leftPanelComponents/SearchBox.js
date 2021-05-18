import React from 'react'

function SearchBox() {
  return (
    <div className="p-1 m-auto">
      <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  )
}

export default SearchBox
