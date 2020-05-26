import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

const DataPage = React.lazy(() => import('pages/data'))
const ImportPage = React.lazy(() => import('pages/import'))

const Routing = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <BrowserRouter>
      <Route exact path='/data' component={DataPage} />
      <Route exact path='/import' component={ImportPage} />
      <Route render={() => <Redirect to='/data' />} />
    </BrowserRouter>
  </React.Suspense>
)

export default Routing
