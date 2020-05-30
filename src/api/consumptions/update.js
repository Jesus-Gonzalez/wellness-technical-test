import { HttpClient } from 'api/http'

export const updateConsumption = data => (
  HttpClient({
    url: '/consumption',
    method: 'put',
    data
  }).then(({ data }) => data)
)
