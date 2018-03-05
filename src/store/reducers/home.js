import { handleActions } from 'redux-actions'
import {
  GET_HOME_PAGE_INFORMATION,
  GET_NEW_DATA,
  REQUEST_BEGIN,
  REQUEST_FINISH
} from '../types'

export default handleActions({
  [GET_HOME_PAGE_INFORMATION] (state, action) {
    let response = action.payload
    let result = Object.keys(response).map(dateKey => {
      return {
        date: dateKey,
        num: response[dateKey]
      }
    })
    return {
      ...state,
      plantLogs: result
    }
  },
  [GET_NEW_DATA] (state, action) {
    let response = action.payload
    let result = Object.keys(response).map(dateKey => {
      return {
        date: dateKey,
        num: response[dateKey]
      }
    })
    return {
      ...state,
      plantLogs: result
    }
  },
  [REQUEST_BEGIN] (state) {
    console.log('begin__reducer')
    return {
      ...state,
      requesting: true
    }
  },
  [REQUEST_FINISH] (state) {
    return {
      ...state,
      requesting: false
    }
  }
}, {
  requesting: false,
  plantLogs: []
})
