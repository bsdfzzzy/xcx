import {
  GET_HOME_PAGE_INFORMATION,
  GET_NEW_DATA,
  REQUEST_BEGIN,
  REQUEST_FINISH
} from '../types'
import { createAction } from 'redux-actions'
import wepy from 'wepy'
import { store } from '../../app.wpy'

export const requestBegin = {
  type: REQUEST_BEGIN,
  payload: ''
}

export const requestFinish = {
  type: REQUEST_FINISH,
  payload: ''
}

export const getHomePageInformation = createAction(GET_HOME_PAGE_INFORMATION, () => {
  return new Promise(resolve => {
    wepy.request({
      url: 'http://localhost:8081/',
      header: { 'Content-Type': 'application/json' }
    }).then(result => {
      resolve(result.data)
    })
  })
})

export const getNewData = createAction(GET_NEW_DATA, () => {
  return new Promise(resolve => {
    store.dispatch(requestBegin)
    wepy.request({
      url: 'http://localhost:8081/update',
      header: { 'Content-Type': 'application/json' }
    }).then(result => {
      store.dispatch(requestFinish)
      resolve(result.data)
    })
  })
})
