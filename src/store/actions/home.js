import { GET_HOME_PAGE_INFORMATION } from '../types'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

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
