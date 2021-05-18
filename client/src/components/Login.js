import React, {useReducer, useEffect} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const reducerFunction = (state, action) => {
  switch(action.selected){
    case "LOGIN":
      return {
        selected: "LOGIN"
      }
    case "SIGNUP":
      return {
        selected: "SIGNUP"
      }
    default:
        return state;
  }
}

const initialState = {
  selected: "LOGIN",
}

function Login() {

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    let v = document.getElementById("LOGIN");
    v.click();
  }, [])

  const renderComp = () => {
    if(state.selected === "LOGIN")
      return <LoginForm />
    else
      return <SignupForm />
  }

  const clicked = (action) => {
    if(state.selected !== action.target.id){
      dispatch({selected: action.target.id});
    }

    // console.log(state);
  }

  return (
    <div className="container h-100 p-5 mt-5 w-50">
      <div className="row justify-content-evenly bg1 ">
        {/* <div className="col align-self-center">

        </div> */}
        <div className="col-6 align-self-center p-3 bg2 border">
          <div className="btn-group btn-xl" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="LOGIN" onClick={clicked} />
            <label className="btn btn-outline-dark" htmlFor="LOGIN">LogIn</label>

            <input type="radio" className="btn-check" name="btnradio" id="SIGNUP" onClick={clicked}/>
            <label className="btn btn-outline-dark" htmlFor="SIGNUP">SignUp</label>

          </div>

          {renderComp()}

        </div>

      </div>
    </div>
  )
}

export default Login
