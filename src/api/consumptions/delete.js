import { HttpClient } from 'api/http'

export const deleteConsumption = data => (
  HttpClient({
    url: '/consumption',
    method: 'delete',
    data
  }).then(({ data }) => data)
)
