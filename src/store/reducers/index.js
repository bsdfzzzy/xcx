import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'
import pictures from './pictures'
import info from './info'

export default combineReducers({
  counter,
  home,
  pictures,
  info
})
