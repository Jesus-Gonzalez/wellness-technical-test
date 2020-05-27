import axios from 'axios'

export const fetchConsumptions = data => (
  axios({
    url: '/consumption',
    method: 'get',
    data
  }).then(({ data }) => data)
)
