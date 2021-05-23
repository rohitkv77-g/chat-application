import React from 'react'
import Search from './leftPanelNewChat/Search'
import SearchResult from './leftPanelNewChat/SearchResult'
import TopBar from './leftPanelNewChat/TopBar'
import { connect } from 'react-redux'

const profileStyle = {
    height: "60px"
}

const renderList = (users) => {
    if(users.length != 0){
        users = users.data;

        return users.map(user => {
            return <SearchResult key={user._id} userName={user.userName} />
        })
    }
}

function LeftPanelNewChat(props) {
    return (
        <div className="container-fluid h-100 p-3">
            <div className="row p-auto m-auto" style={profileStyle}>

                <TopBar />
                <span className="border-bottom border-2 "></span>

                {/* <div className="col-2"> 
        profile
        <i className="fas fa-user fa-3x"></i>
        </div>
        <div className="col-10 d-flex justify-content-end p-0">
          <ProfileDropDown />
        </div> */}
            </div>


            <div className="row m-auto" style={profileStyle}>
                <Search />
            </div>


            <div className="row m-auto" style={{ height: "640px", overflow: "auto" }}>
                <div className="container-fluid h-100 w-100 scroll">
                    {renderList(props.users)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.searchResult.users
    }
}

export default connect(mapStateToProps)(LeftPanelNewChat)
