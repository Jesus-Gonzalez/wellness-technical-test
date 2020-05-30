import { HttpClient } from 'api/http'

export const fetchConsumptions = data => (
  HttpClient({
    url: '/consumption',
    method: 'get',
    data
  }).then(({ data }) => data.sort((a, b) => a.date > b.date ? 1 : -1))
)
