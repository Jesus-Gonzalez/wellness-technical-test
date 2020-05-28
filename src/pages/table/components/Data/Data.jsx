import React from 'react'

import LoadingPage from 'pages/loading'

import { TableContainer } from '../__components'

export const Data = props => {
  const { data } = props

  if (data.loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Consumption</h1>

      <TableContainer
        data={data}
      />
    </div>
  )
}
