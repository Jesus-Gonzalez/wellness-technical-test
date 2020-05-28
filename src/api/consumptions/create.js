import axios from 'axios'

export const createConsumption = data => (
  axios({
    url: '/consumption',
    method: 'post',
    data
  }).then(({ data }) => data)
)
