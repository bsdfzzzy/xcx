import { handleActions } from 'redux-actions'
import { GET_PLANT_INFO } from '../types'

export default handleActions({
  [GET_PLANT_INFO] (state, action) {
    return {
      ...state,
      data: action.payload
    }
  }
}, {
  data: {}
})
