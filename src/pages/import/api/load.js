import axios from 'axios'

export const load = data => {
  axios('/api/load', { data })
}
