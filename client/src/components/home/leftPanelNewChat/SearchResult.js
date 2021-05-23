import React from 'react'
import {connect} from 'react-redux'

const handleChat = (e, p) => {
    console.log(p)
}

function SearchResult(props) {
    return (
        <div className="row mt-auto mt-1 mb-1">
            <span className="border border-2 rounded-pill container w-100 h-100" onClick={(e) => handleChat(e, props.userName)} style={{cursor: "pointer"}}>
                <div className="row">
                    <div className="col-3 mt-auto mb-auto">
                        <i className="bi bi-person-fill" style={{ fontSize: "3rem", color: "black" }}></i>
                    </div>
                    <div className="col-8 mt-auto mb-auto text-truncate" style={{ fontSize: "2rem", color: "black" }}>
                        {props.userName}
        <p className="mt-auto" style={{ fontSize: "1rem", color: "grey" }}>{"hello fsdafdsaf sdafs adf sdafsadfdasffasdf"}</p>
                    </div>
                </div>
            </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default SearchResult
