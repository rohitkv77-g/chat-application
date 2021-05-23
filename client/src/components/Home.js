import React from 'react'
import { connect } from 'react-redux'
import LeftPanel from './home/LeftPanel'
import LeftPanelNewChat from './home/LeftPanelNewChat'
import RightPanel from './home/RightPanel'

const leftPanelRender = (props) => {
    if(props.home)
        return <LeftPanel />
    if(props.newChat)
        return <LeftPanelNewChat />
}

function Home(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-4 mh border">
                    {leftPanelRender(props)}
                    {/* <LeftPanel /> */}
                </div>
                <div className="col-8 mh">
                    <RightPanel />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.leftPanel
    }
}

export default connect(mapStateToProps)(Home);
