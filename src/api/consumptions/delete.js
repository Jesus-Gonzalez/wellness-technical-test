import axios from 'axios'

export const updateConsumption = data => (
  axios({
    url: '/consumption',
    method: 'delete',
    data
  }).then(({ data }) => data)
)
