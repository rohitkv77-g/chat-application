import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {signingUp, signUpSucess, signUpFailure} from '../redux/auth/authActions'

function SignupForm(props) {
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

    props.signingUp();
    axios.post('http://localhost:5000/api/register', payload)
    .then(res => {
      if(res.data.inserted){
        alert('account registered')
        props.signUpSucess(payload.userName);
      }else{
        alert('account with this user name already exists')
        props.signUpFailure('user exists')
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
            <button type="submit" className="btn btn-primary" onClick={handler}>Sign Up</button>
          </div>
          {/* <div className="col-8 d-flex mt-4 justify-content-end">
            <button type="submit" className="btn btn-secondary">Forgot Password</button>
          </div> */}
        {/* </div> */}
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signingUp: () => dispatch(signingUp()),
    signUpSucess: user => dispatch(signUpSucess(user)),
    signUpFailure: err => dispatch(signUpFailure(err))
  }
}

export default connect(null, mapDispatchToProps)(SignupForm)
