import axios from 'axios'

export const fetchConsumptions = data => (
  axios({
    url: '/consumption',
    method: 'get',
    data
  }).then(({ data }) => data.sort((a, b) => a.date > b.date ? 1 : -1))
)
