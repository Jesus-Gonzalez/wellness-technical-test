import React from 'react'

import { Chart, TableContainer } from '../__components'

export const Data = props => {
  const { data } = props

  return (
    <div>
      <h1>Consumption</h1>

      <Chart
        data={data}
      />

      <TableContainer
        data={data}
      />
    </div>
  )
}
