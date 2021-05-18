import {LOGGIN_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS, SIGNING_UP, SIGNED_UP_FAILURE, SIGNED_UP_SUCESS} from './authType';

export const logginIn = () => {
  return {
    type: LOGGIN_IN
  }
}

export const loggedSuccess = user => {
  return {
    type: LOG_IN_SUCCESS,
    payload: user
  }
}

export const loggedFailure = msg => {
  return {
    type: LOG_IN_FAILURE,
    payload: msg
  }
}

export const signingUp = () => {
  return {
    type: SIGNING_UP
  }
}

export const signUpSucess = user => {
  return {
    type: SIGNED_UP_SUCESS,
    payload: user
  }
}

export const signUpFailure = msg => {
  return {
    type: SIGNED_UP_FAILURE,
    payload:msg
  }
}