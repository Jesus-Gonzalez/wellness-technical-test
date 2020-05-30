import { HttpClient } from 'api/http'

export const bulkConsumption = data => (
  HttpClient({
    url: '/consumption/bulk',
    method: 'post',
    data
  }).then(response => response.status === 200)
)
