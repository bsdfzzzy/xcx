import { handleActions } from 'redux-actions'
import { GET_PICTURES_BY_DATE } from '../types'

export default handleActions({
  [GET_PICTURES_BY_DATE] (state, action) {
    return {
      ...state,
      data: action.payload
    }
  }
}, {
  data: []
})
