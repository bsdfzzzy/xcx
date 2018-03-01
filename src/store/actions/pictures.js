import { GET_PICTURES_BY_DATE } from '../types'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getPicturesByDate = createAction(GET_PICTURES_BY_DATE, (date) => {
  return new Promise(resolve => {
    wepy.request({
      url: 'http://localhost:8081/' + date,
      header: { 'Content-Type': 'application/json' }
    }).then(result => {
      resolve(result.data)
    })
  })
})
