import axios from 'axios'

export const deleteConsumption = data => (
  axios({
    url: '/consumption',
    method: 'delete',
    data
  }).then(({ data }) => data)
)
