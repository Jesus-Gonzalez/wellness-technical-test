import { HttpClient } from 'api/http'

export const createConsumption = data => (
  HttpClient({
    url: '/consumption',
    method: 'post',
    data
  }).then(({ data }) => data)
)
