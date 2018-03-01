import { handleActions } from 'redux-actions'
import { GET_HOME_PAGE_INFORMATION } from '../types'

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
  }
}, {
  plantLogs: []
})
