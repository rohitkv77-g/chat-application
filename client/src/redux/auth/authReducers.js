import { LOGGIN_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS, SIGNING_UP, SIGNED_UP_FAILURE, SIGNED_UP_SUCESS } from './authType';

const initialState = {
  loading: false,
  user: null,
  error: null,
  loggedIn: false
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGIN_IN: return {
      loading: true,
      user: null,
      error: null,
      loggedIn: false
    }

    case LOG_IN_SUCCESS: return {
      loading: false,
      error: null,
      user: action.payload,
      loggedIn: true
    }

    case LOG_IN_FAILURE: return {
      loading: false,
      user: null,
      error: action.payload,
      loggedIn: false
    }

    case SIGNING_UP: return {
      loading: true,
      user: null,
      error: null,
      loggedIn: false
    }

    case SIGNED_UP_SUCESS: return {
      loading: false,
      error: null,
      user: action.payload,
      loggedIn: true
    }

    case SIGNED_UP_FAILURE: return {
      loading: false,
      user: null,
      error: action.payload,
      loggedIn: false
    }

    default: return state;
  }
}

export default authReducer;