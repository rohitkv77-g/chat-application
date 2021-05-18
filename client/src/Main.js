import React from 'react'
import {connect} from 'react-redux'
import Home from './components/Home';
import Login from './components/Login';

function Main(props) {
  // console.log(props)
  // if(props.loggedIn)
    return <Home />
  // else
  //   return <Login />
}

const mapStateToProps = state => {
  return {
    userName: state.auth.userName,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(Main)
