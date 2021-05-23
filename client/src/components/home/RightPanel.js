import React from 'react'
import MessageComponent from './rightPanelComonents/MessageComponent'
import { connect } from 'react-redux'
import { chatAreaDisabled, chatAreaLoading, chatAreaLoaded } from '../../redux/chatArea/chatAreaAction'


const profileStyle = {
    height: "60px"
}

function RightPanel(props) {
    console.log(props)
    if (props.disabled) {
        return <div className="container-fluid border h-100 w-100 p-3">

        </div>
    }
    return (
        <div className="container-fluid border h-100 w-100 p-3">
            <div className="row m-auto border" style={profileStyle}>
                {props.userName}
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

const mapStateToProps = (state) => {
    return {
        ...state.chatArea
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatAreaDisabled: () => dispatch(chatAreaDisabled()),
        chatAreaLoading: (data) => dispatch(chatAreaLoading(data)),
        chatAreaLoaded: (data) => dispatch(chatAreaLoaded(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel)
