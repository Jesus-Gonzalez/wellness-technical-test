import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'
import * as serviceWorker from './serviceWorker'

import 'c3/c3.css';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

serviceWorker.unregister()
