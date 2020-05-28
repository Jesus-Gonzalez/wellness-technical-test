import React from 'react'

import LoadingPage from 'pages/loading'

import { Chart } from '../__components'

export const DataTemplate = props => {
  const { data } = props

  if (data.loading) {
    return <LoadingPage />
  }

  return (
    <Chart
      data={data.items}
    />
  )
}
