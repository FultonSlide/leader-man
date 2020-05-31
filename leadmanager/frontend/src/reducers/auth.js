import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR
} from '../actions/types'

const intialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export default function (state = intialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        isLoading: false,
        token: null,
        user: null,
        isAuthenticated: false
      }
    default:
      return state
  }
}
