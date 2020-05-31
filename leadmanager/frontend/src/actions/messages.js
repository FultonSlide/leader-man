import { CREATE_MESSAGE, GET_ERRORS } from '../actions/types'

// Create message
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  }
}

// Return errors
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  }
}
