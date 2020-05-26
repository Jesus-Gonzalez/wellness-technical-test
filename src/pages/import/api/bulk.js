import axios from 'axios'

export const bulk = data => (
  axios({
    url: '/consumption/bulk',
    method: 'post',
    data
  })
)
