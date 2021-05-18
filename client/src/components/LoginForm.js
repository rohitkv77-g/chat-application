import React from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {logginIn, loggedSuccess, loggedFailure} from '../redux/auth/authActions'

function LoginForm(props) {

  const handler = (action) => {
    action.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === ""){
      alert("empty username")
      return;
    }
    if(password === ""){
      alert("empty password field")
      return;
    }
    
    const payload = {
      userName: username,
      password
    };
    
    props.logginIn()
    axios.post('http://localhost:5000/api/login', payload)
    .then(res => {
      if(res.data.loggedIn){
        alert('logged in');
        props.loggedSuccess(payload.userName);
      }else{
        alert('username or password incorrect')
        props.loggedFailure('no user');
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form className="row g-2">
        <div className="col-12">
          <label htmlFor="username" className="form-label">username</label>
          <input type="username" className="form-control" id="username"/>
        </div>
        <div className="col-12">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"/>
        </div>
        {/* <div className="row g-2"> */}
          <div className="col d-flex mt-4 justify-content-end">
            <button type="submit" className="btn btn-primary" onClick={handler}>Log in</button>
          </div>
          {/* <div className="col-8 d-flex mt-4 justify-content-end">
            <button type="submit" className="btn btn-secondary">Forgot Password</button>
          </div> */}
        {/* </div> */}
      </form>
    </div>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     ...state.auth
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    logginIn: () => dispatch(logginIn()),
    loggedSuccess: (user) => dispatch(loggedSuccess(user)),
    loggedFailure: (err) => dispatch(loggedFailure(err))
  }
} 

export default connect(null, mapDispatchToProps)(LoginForm)