import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { Layout } from 'components'
import LoadingPage from 'pages/loading'

const DataPage = React.lazy(() => import('pages/data'))
const ImportPage = React.lazy(() => import('pages/import'))

const Routing = () => (
  <BrowserRouter>
    <Layout>
      <React.Suspense fallback={<LoadingPage />}>
        <Route exact path="/" render={() => <Redirect to="/data" />} />
        <Route exact path='/data' component={DataPage} />
        <Route exact path='/import' component={ImportPage} />
      </React.Suspense>
    </Layout>
  </BrowserRouter>
)

export default Routing
