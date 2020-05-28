import axios from 'axios'

export const updateConsumption = data => (
  axios({
    url: '/consumption',
    method: 'put',
    data
  }).then(({ data }) => data)
)
