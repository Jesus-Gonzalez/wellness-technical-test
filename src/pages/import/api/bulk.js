import axios from 'axios'

export const bulk = data => (
  axios({
    url: '/consumption/bulk',
    method: 'post',
    data
  }).then(response => response.status === 200)
)
