import React from 'react'

import LoadingPage from 'pages/loading'

import { Chart } from '../__components'

export const Data = props => {
  const { data } = props

  if (data.loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Consumption</h1>

      <Chart
        data={data.items}
      />
    </div>
  )
}
