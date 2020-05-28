import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { Layout } from 'components'
import LoadingPage from 'pages/loading'

const TablePage = React.lazy(() => import('pages/table'))
const ChartPage = React.lazy(() => import('pages/chart'))
const ImportPage = React.lazy(() => import('pages/import'))

const Routing = () => (
  <BrowserRouter>
    <Layout>
      <React.Suspense fallback={<LoadingPage />}>
        <Route exact path="/" render={() => <Redirect to="/table" />} />
        <Route exact path='/table' component={TablePage} />
        <Route exact path='/chart' component={ChartPage} />
        <Route exact path='/import' component={ImportPage} />
      </React.Suspense>
    </Layout>
  </BrowserRouter>
)

export default Routing
