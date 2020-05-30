import axios from 'axios'

import Configuration from './configuration'

export const HttpClient = ({ url, ...config }) => (
  axios({
    url: Configuration.BaseApiUrl.concat(url),
    ...config
  })
)
