import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SERVER } from '../../../App'
import { connect } from 'react-redux'
import { searchResult } from '../../../redux/searchResult/action'

function Search(props) {
    let [val, updateVal] = useState("");

    useEffect(() => {
        document.getElementById('searchUser').addEventListener('keypress', e => {
            if (e.key == "Enter") {
                searchHandler();
            }
        })
    }, []);

    const handler = (e) => {
        updateVal(e.target.value)
    }

    const searchHandler = () => {
        const val = document.getElementById('searchUser').value;
        if (val == "")
            return;
        const url = SERVER + 'api/searchuser/' + val;
        // console.log(url);
        axios.get(url)
            .then(data => {
                props.changeSearchResult(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="p-1 m-auto">
            <div className="input-group rounded">
                <input type="search" id="searchUser" className="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" value={val} onChange={handler} />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search" onClick={searchHandler}></i>
                </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearchResult: (data) => dispatch(searchResult(data))
    }
}

export default connect(null, mapDispatchToProps)(Search)