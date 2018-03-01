import { GET_PLANT_INFO } from '../types'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getPlantInfo = createAction(GET_PLANT_INFO, (id) => {
  return new Promise(resolve => {
    wepy.request({
      url: 'http://localhost:8081/plantInfo/' + id,
      header: { 'Content-Type': 'application/json' }
    }).then(result => {
      resolve(result.data)
    })
  })
})
