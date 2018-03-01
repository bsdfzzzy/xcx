import { combineReducers } from 'redux'
import home from './home'
import pictures from './pictures'
import info from './info'

export default combineReducers({
  home,
  pictures,
  info
})
