import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from 'components'

const DataPage = React.lazy(() => import('pages/data'))
const ImportPage = React.lazy(() => import('pages/import'))

const Routing = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Layout>
      <BrowserRouter>
        <Route exact path='/data' component={DataPage} />
        <Route exact path='/import' component={ImportPage} />
      </BrowserRouter>
    </Layout>
  </React.Suspense>
)

export default Routing
